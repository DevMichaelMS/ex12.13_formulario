$(document).ready(function() {
    function aplicarMascara() {
        if ($('#cel').is(':checked')) {
            $('#telefone').mask('(00) 00000-0000');
            $('#telefone').attr('placeholder', '(12) 12345-6789');
        } else if ($('#res').is(':checked')) {
            $('#telefone').mask('(00) 0000-0000');
            $('#telefone').attr('placeholder', '(12) 1234-5678');
        } else {
            $('#telefone').val('');
            $('#telefone').attr('placeholder', 'Selecione um tipo de telefone');
            $('#telefone').off('input');
        }
    }

    $('input[name="tipoTelefone"]').on('change', function() {
        aplicarMascara();
    });

    aplicarMascara();

    $('form').on('submit', function(event) {
        event.preventDefault();

        if (this.checkValidity()) {
            $('.alert-success')
                .removeClass('d-none')
                .fadeIn();
            setTimeout(() => {
                $('.alert-success').fadeOut(() => {
                    $('.alert-success').addClass('d-none');
                });
            }, 3000);

            this.reset();
            aplicarMascara();
        } else {
            this.reportValidity();
        }
    });
});