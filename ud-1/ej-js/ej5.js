const modulos = [
    {
        nombre: 'Sistemas informáticos',
        curso: 1,
        alumnos: [
        'Don Pepito', 'Perico', 'Don José'
        ]
    },
    {
        nombre: 'Desarrollo Web en entorno cliente',
        curso: 2,
        asignatura: '',
        alumnos: [
        'Juan', 'Perico', 'Andrés', 'Don Pepito'
        ]
    },
    ]

function generarListaAlumnos(modulos){

    const alumnosRaw = []
    for ( index in modulos) {
        
        for (alumno of modulos[index].alumnos ){
            
            alumnosRaw.push(alumno)
        }
    }
    
    const alumnosSet = new Set( alumnosRaw )

    return alumnosSet

}    


function ambosCursos(modulos) {

    const alumnos = generarListaAlumnos(modulos)
    const alumnosEnDosCursos = []

    for (alumno of alumnos) {
        let primerCurso = false
        let segundoCurso = false

        for( modulo of modulos ) {
            if ( modulo.alumnos.includes(alumno) ) {
                modulo.curso == 1 ? primerCurso = true
                                    : segundoCurso = true
            }

        }

        if( primerCurso && segundoCurso ) alumnosEnDosCursos.push(alumno)

    }

    console.log({alumnosEnDosCursos})
    

}

ambosCursos(modulos)