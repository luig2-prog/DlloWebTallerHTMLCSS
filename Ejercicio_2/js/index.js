const programacion_evento = document.getElementById('programacion_evento');
const matematica_evento = document.getElementById('matematica_evento');
const marketing_evento = document.getElementById('marketing_evento');
const habilidades_evento = document.getElementById('habilidades_evento');
const ingles_evento = document.getElementById('ingles_evento');
const arte_evento = document.getElementById('arte_evento');

const categories = document.getElementById('categorias');
let dllo = null;

const cursos_programacion = `
    <div  class="item1 cursos_desarrollo">
                            <a class="item item_cusos" id="programacion_evento_dllo" href="pages/desarrollo/java.html">
                                <div class="sub_item">
                                    <img src="utils/img/java.png" alt="" >
                                    <div>
                                        <div>
                                            Java
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Hernandez</div>
                                    </div>
                                </div>
                            </a>
                            <a class="item item_cusos" id="programacion_evento" href="pages/desarrollo/javascript.html">
                                <div class="sub_item">
                                    <img src="utils/img/javascript.png" alt="">
                                    <div>
                                        <div>
                                            Javascript
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Garces</div>
                                    </div>
                                </div>
                            </a>
                            <a class="item item_cusos" id="programacion_evento" href="pages/desarrollo/ruby.html">
                                <div class="sub_item">
                                    <img src="utils/img/ruby.png" alt="">
                                    <div>
                                        <div>
                                            Ruby
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Hernandez</div>
                                    </div>
                                </div>
                            </a>
                            <a class="item item_cusos" id="programacion_evento" href="pages/desarrollo/phyton.html">
                                <div class="sub_item">
                                    <img src="utils/img/phyton.png" alt="">
                                    <div>
                                        <div>
                                            Phyton
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Garces</div>
                                    </div>
                                </div>
                            </a>
                            <a class="item item_cusos" id="programacion_evento" href="pages/desarrollo/php.html">
                                <div class="sub_item">
                                    <img src="utils/img/php.png" alt="">
                                    <div>
                                        <div>
                                            PHP
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Garces</div>
                                    </div>
                                </div>
                            </a>
                            <a class="item item_cusos" id="programacion_evento" href="pages/desarrollo/docker.html">
                                <div class="sub_item">
                                    <img src="utils/img/docker.png" alt="">
                                    <div>
                                        <div>
                                            Docker
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Hernandez</div>
                                    </div>
                                </div>
                            </a>
                            <a class="item item_cusos" id="programacion_evento" href="pages/desarrollo/kubernetes.html">
                                <div class="sub_item">
                                    <img src="utils/img/kubernetes.png" alt="">
                                    <div>
                                        <div>
                                            Kubernetes
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Hernandez</div>
                                    </div>
                                </div>
                            </a>
                            <a class="item item_cusos" id="programacion_evento" href="pages/desarrollo/swift.html">
                                <div class="sub_item">
                                    <img src="utils/img/swift.png" alt="">
                                    <div>
                                        <div>
                                            Swift
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Garces</div>
                                    </div>
                                </div>
                            </a>
                            <a class="item item_cusos" id="programacion_evento" href="pages/desarrollo/servers.html">
                                <div class="sub_item">
                                    <img src="utils/img/servidores.png" alt="">
                                    <div>
                                        <div>
                                            Server admin
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Garces</div>
                                    </div>
                                </div>
                            </a>
                        </div>
    `;

const cursos_matematica = `
        <div class="item1 cursos_desarrollo">
                            <a class="item item_cusos" id="programacion_evento_dllo" href="pages/matematica/calculo.html">
                                <div class="sub_item">
                                    <img src="utils/img/estadistica/calculo.png" alt="">
                                    <div>
                                        <div>
                                            Cálculo Diferencial e Integral
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Garces</div>
                                    </div>
                                </div>
                            </a>
                            <a class="item item_cusos" id="programacion_evento" href="pages/matematica/precalculo.html">
                                <div class="sub_item">
                                    <img src="utils/img/estadistica/precalculo.png" alt="">
                                    <div>
                                        <div>
                                            Matemáticas Pre-U
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Hernandez</div>
                                    </div>
                                </div>
                            </a>
                            <a class="item item_cusos" id="programacion_evento" href="pages/matematica/PensamientMatematico.html">
                                <div class="sub_item">
                                    <img src="utils/img/estadistica/PensamientMatematico.png" alt="">
                                    <div>
                                        <div>
                                        Pensamiento Matematico
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Garces</div>
                                    </div>
                                </div>
                            </a>
                            <a class="item item_cusos" id="programacion_evento" href="pages/matematica/MatematicasDiscretas.html">
                                <div class="sub_item">
                                    <img src="utils/img/estadistica/MatematicasDiscretas.png" alt="">
                                    <div>
                                        <div>
                                            Curso Maestro de Matemática Discreta
                                        </div>
                                        <div>Tutor</div>
                                        <div>Luis Garces</div>
                                    </div>
                                </div>
                            </a>
                        </div>
    `;

const cursos_marketing = `
    <div class="item1 cursos_desarrollo">
                        <a class="item item_cusos" id="programacion_evento_dllo" href="pages/marketing/Estrategia.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/1.png" alt="">
                                <div>
                                    <div>
                                        Estrategia de Marketing y Marketing Digital 2021
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/CursoCompleto.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/2.png" alt="">
                                <div>
                                    <div>
                                        Curso Completo de Marketing Digital
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Hernandez</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/AllMarketing.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/3.png" alt="">
                                <div>
                                    <div>
                                        Todo sobre Marketing
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/AutoMarketing.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/4.png" alt="">
                                <div>
                                    <div>
                                        Automatiza tu Marketing Digital
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                    </div>
`;

const cursos_habilidades = `
    <div class="item1 cursos_desarrollo">
                        <a class="item item_cusos" id="programacion_evento_dllo" href="pages/marketing/Estrategia.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/1.png" alt="">
                                <div>
                                    <div>
                                        Estrategia de Marketing y Marketing Digital 2021
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/CursoCompleto.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/2.png" alt="">
                                <div>
                                    <div>
                                        Curso Completo de Marketing Digital
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Hernandez</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/AllMarketing.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/3.png" alt="">
                                <div>
                                    <div>
                                        Todo sobre Marketing
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/AutoMarketing.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/4.png" alt="">
                                <div>
                                    <div>
                                        Automatiza tu Marketing Digital
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                    </div>
`;

const cursos_ingles = `
    <div class="item1 cursos_desarrollo">
                        <a class="item item_cusos" id="programacion_evento_dllo" href="pages/marketing/Estrategia.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/1.png" alt="">
                                <div>
                                    <div>
                                        Estrategia de Marketing y Marketing Digital 2021
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/CursoCompleto.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/2.png" alt="">
                                <div>
                                    <div>
                                        Curso Completo de Marketing Digital
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Hernandez</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/AllMarketing.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/3.png" alt="">
                                <div>
                                    <div>
                                        Todo sobre Marketing
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/AutoMarketing.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/4.png" alt="">
                                <div>
                                    <div>
                                        Automatiza tu Marketing Digital
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                    </div>
`;

const cursos_arte = `
    <div class="item1 cursos_desarrollo">
                        <a class="item item_cusos" id="programacion_evento_dllo" href="pages/marketing/Estrategia.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/1.png" alt="">
                                <div>
                                    <div>
                                        Estrategia de Marketing y Marketing Digital 2021
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/CursoCompleto.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/2.png" alt="">
                                <div>
                                    <div>
                                        Curso Completo de Marketing Digital
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Hernandez</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/AllMarketing.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/3.png" alt="">
                                <div>
                                    <div>
                                        Todo sobre Marketing
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                        <a class="item item_cusos" id="programacion_evento" href="pages/marketing/AutoMarketing.html">
                            <div class="sub_item">
                                <img src="utils/img/marketing/4.png" alt="">
                                <div>
                                    <div>
                                        Automatiza tu Marketing Digital
                                    </div>
                                    <div>Tutor</div>
                                    <div>Luis Garces</div>
                                </div>
                            </div>
                        </a>
                    </div>
`;

const panel_progamacion = document.getElementById('programacion');

const cat = categories.outerHTML;

let listo = false;
programacion_evento.addEventListener('click', () => {
    categories.style.visibility = 'hidden';
    const padre = document.querySelector('#item_cat');
    const hijo = document.querySelector('#categorias');

    padre.removeChild(hijo);

    setTimeout(() => {
        padre.innerHTML = cursos_programacion;
    },.1);
    
    dllo = document.querySelector('#programacion_evento_dllo');
    listo = true;
    // window.location = 'pages/desarrollo/java.html';
});

matematica_evento.addEventListener('click', () => {
    categories.style.visibility = 'hidden';
    const padre = document.querySelector('#item_cat');
    const hijo = document.querySelector('#categorias');

    padre.removeChild(hijo);

    setTimeout(() => {
        padre.innerHTML = cursos_matematica;
    },.1);
    
    dllo = document.querySelector('#programacion_evento_dllo');
    listo = true;
    // window.location = 'pages/desarrollo/java.html';
});

marketing_evento.addEventListener('click', () => {
    categories.style.visibility = 'hidden';
    const padre = document.querySelector('#item_cat');
    const hijo = document.querySelector('#categorias');

    padre.removeChild(hijo);

    setTimeout(() => {
        padre.innerHTML = cursos_marketing;
    },.1);
    
    dllo = document.querySelector('#programacion_evento_dllo');
    listo = true;
    // window.location = 'pages/desarrollo/java.html';
});

ingles_evento.addEventListener('click', () => {
    categories.style.visibility = 'hidden';
    const padre = document.querySelector('#item_cat');
    const hijo = document.querySelector('#categorias');

    padre.removeChild(hijo);

    setTimeout(() => {
        padre.innerHTML = cursos_ingles;
    },.1);
    
    dllo = document.querySelector('#programacion_evento_dllo');
    listo = true;
    // window.location = 'pages/desarrollo/java.html';
});

habilidades_evento.addEventListener('click', () => {
    categories.style.visibility = 'hidden';
    const padre = document.querySelector('#item_cat');
    const hijo = document.querySelector('#categorias');

    padre.removeChild(hijo);

    setTimeout(() => {
        padre.innerHTML = cursos_habilidades;
    },.1);
    
    dllo = document.querySelector('#programacion_evento_dllo');
    listo = true;
    // window.location = 'pages/desarrollo/java.html';
});

arte_evento.addEventListener('click', () => {
    categories.style.visibility = 'hidden';
    const padre = document.querySelector('#item_cat');
    const hijo = document.querySelector('#categorias');

    padre.removeChild(hijo);

    setTimeout(() => {
        padre.innerHTML = cursos_arte;
    },.1);
    
    dllo = document.querySelector('#programacion_evento_dllo');
    listo = true;
    // window.location = 'pages/desarrollo/java.html';
});

