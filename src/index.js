import './styles.scss'

document.querySelectorAll('.example__form').forEach(el => {
    const example = el.parentElement;

    const shaderImage = example.querySelector('.shader-image');
    const shaderEffect = example.querySelector('.shader-effect');
    const shaderMask = example.querySelector('.shader-mask');

    const checkboxImage = el.querySelector('[name="image"]');
    checkboxImage.addEventListener('change', e => {
        const value = e.target.checked;

        if (value) {
            shaderImage.style['visibility'] = null;
        } else {
            shaderImage.style['visibility'] = 'hidden';
        }
    })

    const checkboxMask = el.querySelector('[name="mask"]');
    checkboxMask.addEventListener('change', e => {
        const value = e.target.checked;

        if (value) {
            shaderMask.style['background'] = null;
        } else {
            shaderMask.style['background'] = 'none';
        }
    })

    const checkboxEffect = el.querySelector('[name="effect"]');
    checkboxEffect.addEventListener('change', e => {
        const value = e.target.checked;

        if (value) {
            shaderEffect.style['background'] = null;
        } else {
            shaderEffect.style['background'] = 'none';
        }
    })
})
