import Particle from './Particle';

const canvas = document.querySelector('#canvas');
if(canvas && canvas !== null && canvas !== undefined) {
    const ctx = canvas.getContext('2d');
    const NB_PARTICLES = 3000;
    const particles = [];

    const animate = () => {

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(p => {
            p.draw(ctx);
            p.update(canvas);
        });

        requestAnimationFrame(animate);
    };

    const create = () => {
        for (var i = 0; i < NB_PARTICLES; i++) {
            particles.push(new Particle(canvas, null, null, 'rgba(255, 255, 255, .7)'));
        }
    };

    const resize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    create();
    resize();
    requestAnimationFrame(animate);

    window.addEventListener('resize', resize);
}
