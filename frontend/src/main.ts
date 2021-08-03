fetch('http://127.0.0.1:3333/images')
    .then(res => res.json())
    .then(data => {
        const imageContainer = $('#images .row');
        $('#loading').hide();

        data.forEach((image: any) => {
            imageContainer.append(`
                <div
                    class="col-12 col-sm-6 col-lg-4 p-3 animated animatedFadeInUp fadeInUp"
                    id="${image._id}">
                    <img class="img-thumbnail" src="http://127.0.0.1:3333/images/${image._id}" alt="">
                    <p>${image.subtitle}</p>
                </div>
            `);

            $(`#${image._id}`).on('click', () => {
                $(`#${image._id}`).hide();
                $(`#${image._id}`).fadeIn('slow');
            });

        });
    });
