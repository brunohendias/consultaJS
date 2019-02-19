var quantidade_num = 10;
var num = [];

function montar_array_number_unic(size) {
	num = [];
	for (var i = 0; i < 6; i++) {
		var sugestao = Math.floor(Math.random() * 60 + 1);
		while (num.indexOf(sugestao) >= 0) {
			sugestao = Math.floor(Math.random() * 60 + 1);
		}
		num.push(sugestao);
	}
	num.sort(function(a, b) {
		return a - b;
	});
}

function show_montar_bilhete(automatic = false) {
	var html = `
		<div class="form-row mb-2 bilhete">
			<div class="col">
				<input value="${automatic ? num[0] : ''}" type="text" class="form-control number text-center rounded-0">
			</div>
			<div class="col">
				<input value="${automatic ? num[1] : ''}" type="text" class="form-control number text-center rounded-0">
			</div>
			<div class="col">
				<input value="${automatic ? num[2] : ''}" type="text" class="form-control number text-center rounded-0">
			</div>
			<div class="col">
				<input value="${automatic ? num[3] : ''}" type="text" class="form-control number text-center rounded-0">
			</div>
			<div class="col">
				<input value="${automatic ? num[4] : ''}" type="text" class="form-control number text-center rounded-0">
			</div>
			<div class="col">
				<input value="${automatic ? num[5] : ''}" type="text" class="form-control number text-center rounded-0">
			</div>
			<div class="col">
				<button type="button" title="Remover Bilhete" class="btn btn-danger remove-bilhete"><i class="fas fa-times"></i></button>
			</div>
		</div>`;
	$('#montar-bilhete').append(html);
}

function iniciar_sorteio(){
	var sorteados = [];
	for (var i = 0; i < quantidade_num; i++) {
		var sugestao = Math.floor(Math.random() * 60 + 1);
		while (sorteados.indexOf(sugestao) >= 0) {
			sugestao = Math.floor(Math.random() * 60 + 1);
		}
		sorteados.push(sugestao);
	}

	sorteados.forEach(function(valor){
		$('#dezenas').append(`<div class="rounded-circle p-2 bg-white d-inline-block mb-2 mr-2">${valor}</div>`)
		$('.number').each(function(index, el) {
			var valor = parseInt($(el).val());
			if (sorteados.indexOf(valor) != -1) {
				$(this).addClass('bg-success text-white');
			}
		});
	})

}

$(document).ready(function($) {

	montar_array_number_unic();
	// Ação para adicioar um novo bilhete
	$('#novoBilhete').click(function(event) {
		show_montar_bilhete();
	});

	// Ação para adicioar um novo bilhete
	$('#montarBilhete').click(function(event) {
		montar_array_number_unic();
		show_montar_bilhete(true);
	});

	// Reseta o jogo
	$('#reset').click(function(event) {
		$(this).addClass('d-none');
		$('#sortear').removeClass('d-none');
		$('.bilhete').remove();
		$('.rounded-circle').remove();
	});

	// Ação do botão para remover bilhete
	$(document).on('click', '.remove-bilhete', function(event) {
		$(this).closest('div.form-row').remove();
	});

	// Ação para verificar se o número digitado é válido
	$(document).on('keypress', '.number', function(event) {
		if (event.which < 48 || event.which > 57) {
			event.preventDefault();
		}else{
			var num = parseInt($(this).val());
			if (parseInt(num + '' + event.key) > 60 ) {
				event.preventDefault();
			}else{
				$(this).removeClass('is-invalid').addClass('is-valid');
			}
		}
	});

	// Ação de sortear números
	$('#sortear').click(function(event) {
		var pass = true;
		$('.number').each(function(index, el) {
			if ($(el).val() == '') {
				$(this).removeClass('is-valid').addClass('is-invalid');
				pass = false;
			}
		});

		if (pass) {
			$(this).addClass("d-none");
			$('#reset').removeClass('d-none');
			iniciar_sorteio();
		}
	});
});