(function app(doc){
    'use strict';
    let arrayLineas = [
        {
        'id': 1,
        'nombre': 'Línea 1',
        'colorHex': 'F54A91',
        'icono': 'iconos/lineas/1.png',
        'estaciones': [{
            'id': 1,
            'nombre': 'Observatorio',
            'latitud': '19.398551',
            'longitud': '-99.200449',
            'icono+': 'iconos/estaciones/linea_1/1.png'
        }, {
            'id': 2,
            'nombre': 'Tacubaya',
            'latitud': '19.403200',
            'longitud': '-99.187103',
            'icono+': 'iconos/estaciones/linea_1/2.png'
        }, {
            'id': 3,
            'nombre': 'Juanacatlán',
            'latitud': '19.412901',
            'longitud': '-99.182198',
            'icono+': 'iconos/estaciones/linea_1/3.png'
        }, {
            'id': 4,
            'nombre': 'Chapultepec',
            'latitud': '19.420799',
            'longitud': '-99.176300',
            'icono+': 'iconos/estaciones/linea_1/linea_1/4.png'
        }, {
            'id': 5,
            'nombre': 'Sevilla',
            'latitud': '19.421900',
            'longitud': '-99.170601',
            'icono+': 'iconos/estaciones/linea_1/5.png'
        }, {
            'id': 6,
            'nombre': 'Insurgentes',
            'latitud': '19.423599',
            'longitud': '-99.162804',
            'icono+': 'iconos/estaciones/linea_1/6.png'
        }, {
            'id': 7,
            'nombre': 'Cuauhtémoc',
            'latitud': '19.425900',
            'longitud': '-99.154701',
            'icono+': 'iconos/estaciones/linea_1/7.png'
        }, {
            'id': 8,
            'nombre': 'Balderas',
            'latitud': '19.427401',
            'longitud': '-99.149101',
            'icono+': 'iconos/estaciones/linea_1/8.png'
        }, {
            'id': 9,
            'nombre': 'Salto del Agua',
            'latitud': '19.426800',
            'longitud': '-99.142197',
            'icono+': 'iconos/estaciones/linea_1/9.png'
        }, {
            'id': 10,
            'nombre': 'Isabel la Católica',
            'latitud': '19.426500',
            'longitud': '-99.137497',
            'icono+': 'iconos/estaciones/linea_1/10.png'
        }, {
            'id': 11,
            'nombre': 'Pino Suárez',
            'latitud': '19.425900',
            'longitud': '-99.133202',
            'icono+': 'iconos/estaciones/linea_1/11.png'
        }, {
            'id': 12,
            'nombre': 'Merced',
            'latitud': '19.425501',
            'longitud': '-99.124702',
            'icono+': 'iconos/estaciones/linea_1/12.png'
        }, {
            'id': 13,
            'nombre': 'Candelaria',
            'latitud': '19.428801',
            'longitud': '-99.119400',
            'icono+': 'iconos/estaciones/linea_1/13.png'
        }, {
            'id': 14,
            'nombre': 'San Lázaro',
            'latitud': '19.430300',
            'longitud': '-99.114799',
            'icono+': 'iconos/estaciones/linea_1/14.png'
        }, {
            'id': 15,
            'nombre': 'Moctezuma',
            'latitud': '19.427200',
            'longitud': '-99.110298',
            'icono+': 'iconos/estaciones/linea_1/15.png'
        }, {
            'id': 16,
            'nombre': 'Balbuena',
            'latitud': '19.423000',
            'longitud': '-99.102501',
            'icono+': 'iconos/estaciones/linea_1/16.png'
        }, {
            'id': 17,
            'nombre': 'Boulevard Puerto Aéreo',
            'latitud': '19.419701',
            'longitud': '-99.096001',
            'icono+': 'iconos/estaciones/linea_1/17.png'
        }, {
            'id': 18,
            'nombre': 'Gómez Farías',
            'latitud': '19.415800',
            'longitud': '-99.090302',
            'icono+': 'iconos/estaciones/linea_1/18.png'
        }, {
            'id': 19,
            'nombre': 'Zaragoza',
            'latitud': '19.412300',
            'longitud': '-99.082397',
            'icono+': 'iconos/estaciones/linea_1/19.png'
        }, {
            'id': 20,
            'nombre': 'Pantitlán',
            'latitud': '19.415400',
            'longitud': '-99.072197',
            'icono+': 'iconos/estaciones/linea_1/20.png'
        }]
    },
        {
        'id': 2,
        'nombre': 'Línea 2',
        'colorHex': '0164A8',
        'icono+': 'iconos/lineas/2.png',
        'estaciones': [{
            'id': 1,
            'nombre': 'Cuatro Caminos',
            'latitud': '19.459600',
            'longitud': '-99.215897',
            'icono+': 'iconos/estaciones/linea_2/1.png'
        }, {
            'id': 2,
            'nombre': 'Panteones',
            'latitud': '19.458799',
            'longitud': '-99.203201',
            'icono+': 'iconos/estaciones/linea_2/2.png'
        }, {
            'id': 3,
            'nombre': 'Tacuba',
            'latitud': '19.459499',
            'longitud': '-99.188698',
            'icono+': 'iconos/estaciones/linea_2/3.png'
        }, {
            'id': 4,
            'nombre': 'Cuitlahuac',
            'latitud': '19.457500',
            'longitud': '-99.182198',
            'icono+': 'iconos/estaciones/linea_2/4.png'
        }, {
            'id': 5,
            'nombre': 'Popotla',
            'latitud': '19.452200',
            'longitud': '-99.174797',
            'icono+': 'iconos/estaciones/linea_2/5.png'
        }, {
            'id': 6,
            'nombre': 'Colegio Militar',
            'latitud': '19.449301',
            'longitud': '-99.171402',
            'icono+': 'iconos/estaciones/linea_2/6.png'
        }, {
            'id': 7,
            'nombre': 'Normal',
            'latitud': '19.444401',
            'longitud': '-99.167397',
            'icono+': 'iconos/estaciones/linea_2/7.png'
        }, {
            'id': 8,
            'nombre': 'San Cosme',
            'latitud': '19.441799',
            'longitud': '-99.161102',
            'icono+': 'iconos/estaciones/linea_2/8.png'
        }, {
            'id': 9,
            'nombre': 'Revolución',
            'latitud': '19.441700',
            'longitud': '-99.161102',
            'icono+': 'iconos/estaciones/linea_2/9.png'
        }, {
            'id': 10,
            'nombre': 'Hidalgo',
            'latitud': '19.437300',
            'longitud': '-99.147102',
            'icono+': 'iconos/estaciones/linea_2/10.png'
        }, {
            'id': 11,
            'nombre': 'Bellas Artes',
            'latitud': '19.436199',
            'longitud': '-99.141899',
            'icono+': 'iconos/estaciones/linea_2/11.png'
        }, {
            'id': 12,
            'nombre': 'Allende',
            'latitud': '19.435600',
            'longitud': '-99.137398',
            'icono+': 'iconos/estaciones/linea_2/12.png'
        }, {
            'id': 13,
            'nombre': 'Zócalo',
            'latitud': '19.433001',
            'longitud': '-99.132500',
            'icono+': 'iconos/estaciones/linea_2/13.png'
        }, {
            'id': 14,
            'nombre': 'Pino Suárez',
            'latitud': '19.425900',
            'longitud': '-99.133202',
            'icono+': 'iconos/estaciones/linea_2/14.png'
        }, {
            'id': 15,
            'nombre': 'San Antonio Abad',
            'latitud': '19.418699',
            'longitud': '-99.134102',
            'icono+': 'iconos/estaciones/linea_2/15.png'
        }, {
            'id': 16,
            'nombre': 'Chabacano',
            'latitud': '19.408400',
            'longitud': '-99.135803',
            'icono+': 'iconos/estaciones/linea_2/16.png'
        }, {
            'id': 17,
            'nombre': 'Viaducto',
            'latitud': '19.400900',
            'longitud': '-99.136902',
            'icono+': 'iconos/estaciones/linea_2/17.png'
        }, {
            'id': 18,
            'nombre': 'Xola',
            'latitud': '19.395201',
            'longitud': '-99.137802',
            'icono+': 'iconos/estaciones/linea_2/18.png'
        }, {
            'id': 19,
            'nombre': 'Villa de Cortés',
            'latitud': '19.387600',
            'longitud': '-99.139000',
            'icono+': 'iconos/estaciones/linea_2/19.png'
        }, {
            'id': 20,
            'nombre': 'Nativitas',
            'latitud': '19.379499',
            'longitud': '-99.140198',
            'icono+': 'iconos/estaciones/linea_2/20.png'
        }, {
            'id': 21,
            'nombre': 'Portales',
            'latitud': '19.369900',
            'longitud': '-99.141602',
            'icono+': 'iconos/estaciones/linea_2/21.png'
        }, {
            'id': 22,
            'nombre': 'Ermita',
            'latitud': '19.361900',
            'longitud': '-99.142899',
            'icono+': 'iconos/estaciones/linea_2/22.png'
        }, {
            'id': 23,
            'nombre': 'General Anaya',
            'latitud': '19.353300',
            'longitud': '-99.144997',
            'icono+': 'iconos/estaciones/linea_2/23.png'
        }, {
            'id': 24,
            'nombre': 'Tasqueña',
            'latitud': '19.344200',
            'longitud': '-99.142502',
            'icono+': 'iconos/estaciones/linea_2/24.png'
        }]
    },
        {
        'id': 3,
        'nombre': 'Línea 3',
        'colorHex': '9E9A36',
        'icono+': 'iconos/lineas/3.png',
        'estaciones': [{
            'id': 1,
            'nombre': 'Indios Verdes',
            'latitud': '19.495399',
            'longitud': '-99.119499',
            'icono+': 'iconos/estaciones/linea_3/1.png'
        }, {
            'id': 2,
            'nombre': 'Deportivo 18 de Marzo',
            'latitud': '19.483801',
            'longitud': '-99.126602',
            'icono+': 'iconos/estaciones/linea_3/2.png'
        }, {
            'id': 3,
            'nombre': 'Potrero',
            'latitud': '19.476999',
            'longitud': '-99.132202',
            'icono+': 'iconos/estaciones/linea_3/3.png'
        }, {
            'id': 4,
            'nombre': 'La Raza',
            'latitud': '19.470301',
            'longitud': '-99.136902',
            'icono+': 'iconos/estaciones/linea_3/4.png'
        }, {
            'id': 5,
            'nombre': 'Tlatelolco',
            'latitud': '19.455218',
            'longitud': '-99.143164',
            'icono+': 'iconos/estaciones/linea_3/5.png'
        }, {
            'id': 6,
            'nombre': 'Guerrero',
            'latitud': '19.444799',
            'longitud': '-99.145401',
            'icono+': 'iconos/estaciones/linea_3/6.png'
        }, {
            'id': 7,
            'nombre': 'Hidalgo',
            'latitud': '19.437300',
            'longitud': '-99.147102',
            'icono+': 'iconos/estaciones/linea_3/7.png'
        }, {
            'id': 8,
            'nombre': 'Juárez',
            'latitud': '19.433599',
            'longitud': '-99.147903',
            'icono+': 'iconos/estaciones/linea_3/8.png'
        }, {
            'id': 9,
            'nombre': 'Balderas',
            'latitud': '19.427401',
            'longitud': '-99.149101',
            'icono+': 'iconos/estaciones/linea_3/9.png'
        }, {
            'id': 10,
            'nombre': 'Niños Héroes',
            'latitud': '19.421000',
            'longitud': '-99.150497',
            'icono+': 'iconos/estaciones/linea_3/10.png'
        }, {
            'id': 11,
            'nombre': 'Hospital General',
            'latitud': '19.413601',
            'longitud': '-99.153900',
            'icono+': 'iconos/estaciones/linea_3/11.png'
        }, {
            'id': 12,
            'nombre': 'Centro Médico',
            'latitud': '19.406900',
            'longitud': '-99.155197',
            'icono+': 'iconos/estaciones/linea_3/12.png'
        }, {
            'id': 13,
            'nombre': 'Etiopía',
            'latitud': '19.395599',
            'longitud': '-99.156303',
            'icono+': 'iconos/estaciones/linea_3/13.png'
        }, {
            'id': 14,
            'nombre': 'Eugenia',
            'latitud': '19.385500',
            'longitud': '-99.157501',
            'icono+': 'iconos/estaciones/linea_3/14.png'
        }, {
            'id': 15,
            'nombre': 'División del Norte',
            'latitud': '19.379849',
            'longitud': '-99.159111',
            'icono+': 'iconos/estaciones/linea_3/15.png'
        }, {
            'id': 16,
            'nombre': 'Zapata',
            'latitud': '19.370701',
            'longitud': '-99.164902',
            'icono+': 'iconos/estaciones/linea_3/16.png'
        }, {
            'id': 17,
            'nombre': 'Coyoacán',
            'latitud': '19.361500',
            'longitud': '-99.170502',
            'icono+': 'iconos/estaciones/linea_3/17.png'
        }, {
            'id': 18,
            'nombre': 'Viveros',
            'latitud': '19.353701',
            'longitud': '-99.176003',
            'icono+': 'iconos/estaciones/linea_3/18.png'
        }, {
            'id': 19,
            'nombre': 'Miguel Angel de Quevedo',
            'latitud': '19.346800',
            'longitud': '-99.181000',
            'icono+': 'iconos/estaciones/linea_3/19.png'
        }, {
            'id': 20,
            'nombre': 'Copilco',
            'latitud': '19.335899',
            'longitud': '-99.176598',
            'icono+': 'iconos/estaciones/linea_3/20.png'
        }, {
            'id': 21,
            'nombre': 'Universidad',
            'latitud': '19.324499',
            'longitud': '-99.174004',
            'icono+': 'iconos/estaciones/linea_3/21.png'
        }]
    },
        {
        'id': 4,
        'nombre': 'Línea 4',
        'colorHex': '6FB6AE',
        'icono+': 'iconos/lineas/4.png',
        'estaciones': [{
            'id': 1,
            'nombre': 'Martín Carrera',
            'latitud': '19.485001',
            'longitud': '-99.104401',
            'icono+': 'iconos/estaciones/linea_4/2.png'
        }, {
            'id': 2,
            'nombre': 'Talismán',
            'latitud': '19.474600',
            'longitud': '-99.108002',
            'icono+': 'iconos/estaciones/linea_4/2.png'
        }, {
            'id': 3,
            'nombre': 'Bondojito',
            'latitud': '19.464701',
            'longitud': '-99.111900',
            'icono+': 'iconos/estaciones/linea_4/3.png'
        }, {
            'id': 4,
            'nombre': 'Consulado',
            'latitud': '19.458099',
            'longitud': '-99.113899',
            'icono+': 'iconos/estaciones/linea_4/4.png'
        }, {
            'id': 5,
            'nombre': 'Canal del Norte',
            'latitud': '19.448900',
            'longitud': '-99.116096',
            'icono+': 'iconos/estaciones/linea_4/5.png'
        }, {
            'id': 6,
            'nombre': 'Morelos',
            'latitud': '19.439100',
            'longitud': '-99.119590',
            'icono+': 'iconos/estaciones/linea_4/6.png'
        }, {
            'id': 7,
            'nombre': 'Candelaria',
            'latitud': '19.428801',
            'longitud': '-99.119400',
            'icono+': 'iconos/estaciones/linea_4/7.png'
        }, {
            'id': 8,
            'nombre': 'Fray Servando',
            'latitud': '19.421700',
            'longitud': '-99.120499',
            'icono+': 'iconos/estaciones/linea_4/8.png'
        }, {
            'id': 9,
            'nombre': 'Jamaica',
            'latitud': '19.408800',
            'longitud': '-99.122200',
            'icono+': 'iconos/estaciones/linea_4/9.png'
        }, {
            'id': 10,
            'nombre': 'Santa Anita',
            'latitud': '19.402700',
            'longitud': '-99.121696',
            'icono+': 'iconos/estaciones/linea_4/10.png'
        }]
    },
        {
        'id': 5,
        'nombre': 'Línea 5',
        'colorHex': 'F7D417',
        'icono+': 'iconos/lineas/5.png',
        'estaciones': [{
            'id': 1,
            'nombre': 'Politécnico',
            'latitud': '19.500900',
            'longitud': '-99.149300',
            'icono+': 'iconos/estaciones/linea_5/1.png'
        }, {
            'id': 2,
            'nombre': 'Instituto del Petróleo',
            'latitud': '19.490800',
            'longitud': '-99.147090',
            'icono+': 'iconos/estaciones/linea_5/2.png'
        }, {
            'id': 3,
            'nombre': 'Autobuses del Norte',
            'latitud': '19.479099',
            'longitud': '-99.140701',
            'icono+': 'iconos/estaciones/linea_5/3.png'
        }, {
            'id': 4,
            'nombre': 'La Raza',
            'latitud': '19.470301',
            'longitud': '-99.136902',
            'icono+': 'iconos/estaciones/linea_5/4.png'
        }, {
            'id': 5,
            'nombre': 'Misterios',
            'latitud': '19.463400',
            'longitud': '-99.130798',
            'icono+': 'iconos/estaciones/linea_5/5.png'
        }, {
            'id': 6,
            'nombre': 'Valle Gómez',
            'latitud': '19.459400',
            'longitud': '-99.119499',
            'icono+': 'iconos/estaciones/linea_5/6.png'
        }, {
            'id': 7,
            'nombre': 'Consulado',
            'latitud': '19.458099',
            'longitud': '-99.113899',
            'icono+': 'iconos/estaciones/linea_5/7.png'
        }, {
            'id': 8,
            'nombre': 'Eduardo Molina',
            'latitud': '19.451401',
            'longitud': '-99.105400',
            'icono+': 'iconos/estaciones/linea_5/8.png'
        }, {
            'id': 9,
            'nombre': 'Aragón',
            'latitud': '19.451200',
            'longitud': '-99.096397',
            'icono+': 'iconos/estaciones/linea_5/9.png'
        }, {
            'id': 10,
            'nombre': 'Oceanía',
            'latitud': '19.445801',
            'longitud': '-99.087196',
            'icono+': 'iconos/estaciones/linea_5/10.png'
        }, {
            'id': 11,
            'nombre': 'Terminal Aérea',
            'latitud': '19.433800',
            'longitud': '-99.087700',
            'icono+': 'iconos/estaciones/linea_5/11.png'
        }, {
            'id': 12,
            'nombre': 'Hangares',
            'latitud': '19.424200',
            'longitud': '-99.087898',
            'icono+': 'iconos/estaciones/linea_5/12.png'
        }, {
            'id': 13,
            'nombre': 'Pantitlán',
            'latitud': '19.415400',
            'longitud': '-99.072197',
            'icono+': 'iconos/estaciones/linea_5/13.png'
        }]
    },
        {
        'id': 6,
        'nombre': 'Línea 6',
        'colorHex': 'DA251C',
        'icono+': 'iconos/lineas/6.png',
        'estaciones': [{
            'id': 1,
            'nombre': 'El Rosario',
            'latitud': '19.504601',
            'longitud': '-99.200104',
            'icono+': 'iconos/estaciones/linea_6/1.png'
        }, {
            'id': 2,
            'nombre': 'Tezozomoc',
            'latitud': '19.494699',
            'longitud': '-99.195590',
            'icono+': 'iconos/estaciones/linea_6/2.png'
        }, {
            'id': 3,
            'nombre': 'Azcapotzalco',
            'latitud': '19.490999',
            'longitud': '-99.186401',
            'icono+': 'iconos/estaciones/linea_6/3.png'
        }, {
            'id': 4,
            'nombre': 'Ferrería',
            'latitud': '19.490499',
            'longitud': '-99.173897',
            'icono+': 'iconos/estaciones/linea_6/4.png'
        }, {
            'id': 5,
            'nombre': 'Norte 45',
            'latitud': '19.488899',
            'longitud': '-99.163498',
            'icono+': 'iconos/estaciones/linea_6/5.png'
        }, {
            'id': 6,
            'nombre': 'Vallejo',
            'latitud': '19.490299',
            'longitud': '-99.155602',
            'icono+': 'iconos/estaciones/linea_6/7.png'
        }, {
            'id': 8,
            'nombre': 'Instituto del Petróleo',
            'latitud': '19.490801',
            'longitud': '-99.147102',
            'icono+': 'iconos/estaciones/linea_6/8.png'
        }, {
            'id': 9,
            'nombre': 'Lindavista',
            'latitud': '19.487900',
            'longitud': '-99.134598',
            'icono+': 'iconos/estaciones/linea_6/9.png'
        }, {
            'id': 10,
            'nombre': 'Deportivo 18 de Marzo',
            'latitud': '19.483801',
            'longitud': '-99.126602',
            'icono+': 'iconos/estaciones/linea_6/10.png'
        }, {
            'id': 11,
            'nombre': 'La Villa-Basílica',
            'latitud': '19.481600',
            'longitud': '-99.117897',
            'icono+': 'iconos/estaciones/linea_6/11.png'
        }, {
            'id': 12,
            'nombre': 'Martín Carrera',
            'latitud': '19.485001',
            'longitud': '-99.104401',
            'icono+': 'iconos/estaciones/linea_6/12.png'
        }]
    },
        {
        'id': 7,
        'nombre': 'Línea 7',
        'colorHex': 'E87B14',
        'icono+': 'iconos/lineas/7.png',
        'estaciones': [{
            'id': 1,
            'nombre': 'El Rosario',
            'latitud': '19.504601',
            'longitud': '-99.200104',
            'icono+': 'iconos/estaciones/linea_7/1.png'
        }, {
            'id': 2,
            'nombre': 'Aquiles Serdán',
            'latitud': '19.490499',
            'longitud': '-99.194901',
            'icono+': 'iconos/estaciones/linea_7/2.png'
        }, {
            'id': 3,
            'nombre': 'Camarones',
            'latitud': '19.479200',
            'longitud': '-99.190201',
            'icono+': 'iconos/estaciones/linea_7/3.png'
        }, {
            'id': 4,
            'nombre': 'Refinería',
            'latitud': '19.470100',
            'longitud': '-99.190300',
            'icono+': 'iconos/estaciones/linea_7/4.png'
        }, {
            'id': 5,
            'nombre': 'Tacuba',
            'latitud': '19.459499',
            'longitud': '-99.188698',
            'icono+': 'iconos/estaciones/linea_7/5.png'
        }, {
            'id': 6,
            'nombre': 'San Joaquín',
            'latitud': '19.445801',
            'longitud': '-99.191803',
            'icono+': 'iconos/estaciones/linea_7/6.png'
        }, {
            'id': 7,
            'nombre': 'Polanco',
            'latitud': '19.433701',
            'longitud': '-99.190697',
            'icono+': 'iconos/estaciones/linea_7/7.png'
        }, {
            'id': 8,
            'nombre': 'Auditorio',
            'latitud': '19.425501',
            'longitud': '-99.192001',
            'icono+': 'iconos/estaciones/linea_7/8.png'
        }, {
            'id': 9,
            'nombre': 'Constituyentes',
            'latitud': '19.411900',
            'longitud': '-99.191299',
            'icono+': 'iconos/estaciones/linea_7/9.png'
        }, {
            'id': 10,
            'nombre': 'Tacubaya',
            'latitud': '19.403200',
            'longitud': '-99.187103',
            'icono+': 'iconos/estaciones/linea_7/10.png'
        }, {
            'id': 11,
            'nombre': 'San Pedro de los Pinos',
            'latitud': '19.391300',
            'longitud': '-99.186096',
            'icono+': 'iconos/estaciones/linea_7/11.png'
        }, {
            'id': 116,
            'nombre': 'San Antonio',
            'latitud': '19.384800',
            'longitud': '-99.186302',
            'icono+': 'iconos/estaciones/linea_7/12.png'
        }, {
            'id': 84,
            'nombre': 'Mixcoac',
            'latitud': '19.376200',
            'longitud': '-99.187798',
            'icono+': 'iconos/estaciones/linea_7/13.png'
        }, {
            'id': 14,
            'nombre': 'Barranca del Muerto',
            'latitud': '19.360701',
            'longitud': '-99.189598',
            'icono+': 'iconos/estaciones/linea_7/14.png'
        }]
    },
        {
        'id': 8,
        'nombre': 'Línea 8',
        'colorHex': '00923F',
        'icono+': 'iconos/lineas/8.png',
        'estaciones/linea_1': [{
            'id': 54,
            'nombre': 'Garibaldi',
            'latitud': '19.444401',
            'longitud': '-99.139801',
            'icono+': 'iconos/estaciones/linea_1/54.png'
        }, {
            'id': 149,
            'nombre': 'Bellas Artes',
            'latitud': '19.436199',
            'longitud': '-99.141899',
            'icono+': 'iconos/estaciones/linea_1/149.png'
        }, {
            'id': 120,
            'nombre': 'San Juan de Letrán',
            'latitud': '19.431299',
            'longitud': '-99.141602',
            'icono+': 'iconos/estaciones/linea_1/120.png'
        }, {
            'id': 170,
            'nombre': 'Salto del Agua',
            'latitud': '19.426800',
            'longitud': '-99.142197',
            'icono+': 'iconos/estaciones/linea_1/170.png'
        }, {
            'id': 44,
            'nombre': 'Doctores',
            'latitud': '19.421700',
            'longitud': '-99.143303',
            'icono+': 'iconos/estaciones/linea_1/44.png'
        }, {
            'id': 94,
            'nombre': 'Obrera',
            'latitud': '19.413099',
            'longitud': '-99.144096',
            'icono+': 'iconos/estaciones/linea_1/94.png'
        }, {
            'id': 152,
            'nombre': 'Chabacano',
            'latitud': '19.408400',
            'longitud': '-99.135803',
            'icono+': 'iconos/estaciones/linea_1/152.png'
        }, {
            'id': 74,
            'nombre': 'La Viga',
            'latitud': '19.406601',
            'longitud': '-99.126297',
            'icono+': 'iconos/estaciones/linea_1/74.png'
        }, {
            'id': 172,
            'nombre': 'Santa Anita',
            'latitud': '19.402700',
            'longitud': '-99.121696',
            'icono+': 'iconos/estaciones/linea_1/172.png'
        }, {
            'id': 37,
            'nombre': 'Coyuya',
            'latitud': '19.398600',
            'longitud': '-99.113503',
            'icono+': 'iconos/estaciones/linea_1/37.png'
        }, {
            'id': 67,
            'nombre': 'Iztacalco',
            'latitud': '19.388700',
            'longitud': '-99.112198',
            'icono+': 'iconos/estaciones/linea_1/67.png'
        }, {
            'id': 5,
            'nombre': 'Apatlaco',
            'latitud': '19.379299',
            'longitud': '-99.109596',
            'icono+': 'iconos/estaciones/linea_1/5.png'
        }, {
            'id': 2,
            'nombre': 'Aculco',
            'latitud': '19.373800',
            'longitud': '-99.107697',
            'icono+': 'iconos/estaciones/linea_1/2.png'
        }, {
            'id': 49,
            'nombre': 'Escuadrón 201',
            'latitud': '19.365000',
            'longitud': '-99.109200',
            'icono+': 'iconos/estaciones/linea_1/49.png'
        }, {
            'id': 8,
            'nombre': 'Atlalilco',
            'latitud': '19.356199',
            'longitud': '-99.101303',
            'icono+': 'iconos/estaciones/linea_1/8.png'
        }, {
            'id': 68,
            'nombre': 'Iztapalapa',
            'latitud': '19.357901',
            'longitud': '-99.093498',
            'icono+': 'iconos/estaciones/linea_1/68.png'
        }, {
            'id': 25,
            'nombre': 'Cerro de la Estrella',
            'latitud': '19.356100',
            'longitud': '-99.085503',
            'icono+': 'iconos/estaciones/linea_1/25.png'
        }, {
            'id': 135,
            'nombre': 'UAM-I',
            'latitud': '19.350800',
            'longitud': '-99.074699',
            'icono+': 'iconos/estaciones/linea_1/135.png'
        }, {
            'id': 32,
            'nombre': 'Constitución de 1917',
            'latitud': '19.346001',
            'longitud': '-99.063904',
            'icono+': 'iconos/estaciones/linea_1/32.png'
        }]
    },
        {
        'id': 9,
        'nombre': 'Línea 9',
        'colorHex': '4F2926',
        'icono+': 'iconos/lineas/9.png',
        'estaciones': [{
            'id': 175,
            'nombre': 'Tacubaya',
            'latitud': '19.403200',
            'longitud': '-99.187103',
            'icono+': 'iconos/estaciones/linea_1/175.png'
        }, {
            'id': 100,
            'nombre': 'Patriotismo',
            'latitud': '19.406200',
            'longitud': '-99.178902',
            'icono+': 'iconos/estaciones/linea_1/100.png'
        }, {
            'id': 28,
            'nombre': 'Chilpancingo',
            'latitud': '19.406200',
            'longitud': '-99.168404',
            'icono+': 'iconos/estaciones/linea_1/28.png'
        }, {
            'id': 151,
            'nombre': 'Centro Médico',
            'latitud': '19.406900',
            'longitud': '-99.155197',
            'icono+': 'iconos/estaciones/linea_1/151.png'
        }, {
            'id': 77,
            'nombre': 'Lázaro Cárdenas',
            'latitud': '19.406900',
            'longitud': '-99.144699',
            'icono+': 'iconos/estaciones/linea_1/77.png'
        }, {
            'id': 153,
            'nombre': 'Chabacano',
            'latitud': '19.408400',
            'longitud': '-99.135803',
            'icono+': 'iconos/estaciones/linea_1/153.png'
        }, {
            'id': 161,
            'nombre': 'Jamaica',
            'latitud': '19.408800',
            'longitud': '-99.122200',
            'icono+': 'iconos/estaciones/linea_1/161.png'
        }, {
            'id': 85,
            'nombre': 'Mixiuhca',
            'latitud': '19.408600',
            'longitud': '-99.112900',
            'icono+': 'iconos/estaciones/linea_1/85.png'
        }, {
            'id': 139,
            'nombre': 'Velódromo',
            'latitud': '19.408600',
            'longitud': '-99.102997',
            'icono+': 'iconos/estaciones/linea_1/139.png'
        }, {
            'id': 30,
            'nombre': 'Ciudad Deportiva',
            'latitud': '19.408501',
            'longitud': '-99.091202',
            'icono+': 'iconos/estaciones/linea_1/30.png'
        }, {
            'id': 109,
            'nombre': 'Puebla',
            'latitud': '19.407200',
            'longitud': '-99.081902',
            'icono+': 'iconos/estaciones/linea_1/109.png'
        }, {
            'id': 167,
            'nombre': 'Pantitlán',
            'latitud': '19.415400',
            'longitud': '-99.072197',
            'icono+': 'iconos/estaciones/linea_1/167.png'
        }]
    },
        {
        'id': 10,
        'nombre': 'Línea A',
        'colorHex': '991A91',
        'icono+': 'iconos/lineas/10.png',
        'estaciones': [{
            'id': 168,
            'nombre': 'Pantitlán',
            'latitud': '19.415400',
            'longitud': '-99.072197',
            'icono+': 'iconos/estaciones/linea_1/168.png'
        }, {
            'id': 3,
            'nombre': 'Agrícola Oriental',
            'latitud': '19.404800',
            'longitud': '-99.069901',
            'icono+': 'iconos/estaciones/linea_1/3.png'
        }, {
            'id': 21,
            'nombre': 'Canal de San Juan',
            'latitud': '19.398500',
            'longitud': '-99.059303',
            'icono+': 'iconos/estaciones/linea_1/21.png'
        }, {
            'id': 130,
            'nombre': 'Tepalcates',
            'latitud': '19.391300',
            'longitud': '-99.046402',
            'icono+': 'iconos/estaciones/linea_1/130.png'
        }, {
            'id': 57,
            'nombre': 'Guelatao',
            'latitud': '19.385099',
            'longitud': '-99.035599',
            'icono+': 'iconos/estaciones/linea_1/57.png'
        }, {
            'id': 101,
            'nombre': 'Peñón Viejo',
            'latitud': '19.373301',
            'longitud': '-99.017097',
            'icono+': 'iconos/estaciones/linea_1/101.png'
        }, {
            'id': 1,
            'nombre': 'Acatitla',
            'latitud': '19.364700',
            'longitud': '-99.005699',
            'icono+': 'iconos/estaciones/linea_1/1.png'
        }, {
            'id': 124,
            'nombre': 'Santa Marta',
            'latitud': '19.360300',
            'longitud': '-98.995102',
            'icono+': 'iconos/estaciones/linea_1/124.png'
        }, {
            'id': 79,
            'nombre': 'Los Reyes',
            'latitud': '19.358999',
            'longitud': '-98.976898',
            'icono+': 'iconos/estaciones/linea_1/79.png'
        }, {
            'id': 72,
            'nombre': 'La Paz',
            'latitud': '19.350700',
            'longitud': '-98.960999',
            'icono+': 'iconos/estaciones/linea_1/72.png'
        }]
    },
        {
        'id': 11,
        'nombre': 'Línea B',
        'colorHex': 'ccca9a9a9',
        'icono+': 'iconos/lineas/11.png',
        'estaciones': [{
            'id': 19,
            'nombre': 'Buenavista',
            'latitud': 19.446501,
            'longitud': -99.153198,
            'icono+': 'iconos/estaciones/linea_1/19.png'
        }, {
            'id': 158,
            'nombre': 'Guerrero',
            'latitud': 19.444799,
            'longitud': -99.145401,
            'icono+': 'iconos/estaciones/linea_1/158.png'
        }, {
            'id': 157,
            'nombre': 'Garibaldi',
            'latitud': 19.444401,
            'longitud': -99.139801,
            'icono+': 'iconos/estaciones/linea_1/157.png'
        }, {
            'id': 76,
            'nombre': 'Lagunilla',
            'latitud': 19.4433,
            'longitud': -99.130997,
            'icono+': 'iconos/estaciones/linea_1/76.png'
        }, {
            'id': 131,
            'nombre': 'Tepito',
            'latitud': 19.442801,
            'longitud': -99.123703,
            'icono+': 'iconos/estaciones/linea_1/131.png'
        }, {
            'id': 164,
            'nombre': 'Morelos',
            'latitud': 19.4391,
            'longitud': -99.119598,
            'icono+': 'iconos/estaciones/linea_1/164.png'
        }, {
            'id': 171,
            'nombre': 'San Lázaro',
            'latitud': 19.4303,
            'longitud': -99.114799,
            'icono+': 'iconos/estaciones/linea_1/171.png'
        }, {
            'id': 112,
            'nombre': 'Ricardo Flores Magón',
            'latitud': 19.4366,
            'longitud': -99.103699,
            'icono+': 'iconos/estaciones/linea_1/112.png'
        }, {
            'id': 114,
            'nombre': 'Romero Rubio',
            'latitud': 19.4408,
            'longitud': -99.094299,
            'icono+': 'iconos/estaciones/linea_1/114.png'
        }, {
            'id': 165,
            'nombre': 'Oceanía',
            'latitud': 19.445801,
            'longitud': -99.087196,
            'icono+': 'iconos/estaciones/linea_1/165.png'
        }, {
            'id': 42,
            'nombre': 'Deportivo Oceanía',
            'latitud': 19.451,
            'longitud': -99.079399,
            'icono+': 'iconos/estaciones/linea_1/42.png'
        }, {
            'id': 17,
            'nombre': 'Bosque de Aragón',
            'latitud': 19.458105,
            'longitud': -99.069257,
            'icono+': 'iconos/estaciones/linea_1/17.png'
        }, {
            'id': 141,
            'nombre': 'Villa de Aragón',
            'latitud': 19.4617,
            'longitud': -99.061302,
            'icono+': 'iconos/estaciones/linea_1/141.png'
        }, {
            'id': 90,
            'nombre': 'Nezahualcóyotl',
            'latitud': 19.473101,
            'longitud': -99.054497,
            'icono+': 'iconos/estaciones/linea_1/90.png'
        }, {
            'id': 62,
            'nombre': 'Impulsora',
            'latitud': 19.485901,
            'longitud': -99.048897,
            'icono+': 'iconos/estaciones/linea_1/62.png'
        }, {
            'id': 113,
            'nombre': 'Río de los Remedios',
            'latitud': 19.490999,
            'longitud': -99.0467,
            'icono+': 'iconos/estaciones/linea_1/113.png'
        }, {
            'id': 88,
            'nombre': 'Muzquiz',
            'latitud': 19.500999,
            'longitud': -99.041901,
            'icono+': 'iconos/estaciones/linea_1/88.png'
        }, {
            'id': 45,
            'nombre': 'Ecatepec',
            'latitud': 19.515301,
            'longitud': -99.036003,
            'icono+': 'iconos/estaciones/linea_1/45.png'
        }, {
            'id': 97,
            'nombre': 'Olímpica',
            'latitud': 19.521299,
            'longitud': -99.033401,
            'icono+': 'iconos/estaciones/linea_1/97.png'
        }, {
            'id': 103,
            'nombre': 'Plaza Aragón',
            'latitud': 19.5285,
            'longitud': -99.030197,
            'icono+': 'iconos/estaciones/linea_1/103.png'
        }, {
            'id': 29,
            'nombre': 'Ciudad Azteca',
            'latitud': 19.534599,
            'longitud': -99.027496,
            'icono+': 'iconos/estaciones/linea_1/29.png'
        }]
    },
        {
        'id': 12,
        'nombre': 'Línea 12',
        'colorHex': 'ccca9a9a9',
        'icono+': 'iconos/lineas/1.png',
        'estaciones': [{
            'id': 19,
            'nombre': 'Mixcoac',
            'latitud': 19.446501,
            'longitud': -99.153198,
            'icono+': 'iconos/estaciones/linea_1/19.png'
        }, {
            'id': 158,
            'nombre': 'Insurgentes Sur',
            'latitud': 19.444799,
            'longitud': -99.145401,
            'icono+': 'iconos/estaciones/linea_1/158.png'
        }, {
            'id': 157,
            'nombre': 'Hospital 20 de Noviembre',
            'latitud': 19.444401,
            'longitud': -99.139801,
            'icono+': 'iconos/estaciones/linea_1/157.png'
        }, {
            'id': 76,
            'nombre': 'Zapata',
            'latitud': 19.4433,
            'longitud': -99.130997,
            'icono+': 'iconos/estaciones/linea_1/76.png'
        }, {
            'id': 131,
            'nombre': 'Parque de los venados',
            'latitud': 19.442801,
            'longitud': -99.123703,
            'icono+': 'iconos/estaciones/linea_1/131.png'
        }, {
            'id': 164,
            'nombre': 'Eje Central',
            'latitud': 19.4391,
            'longitud': -99.119598,
            'icono+': 'iconos/estaciones/linea_1/164.png'
        }, {
            'id': 171,
            'nombre': 'Ermita',
            'latitud': 19.4303,
            'longitud': -99.114799,
            'icono+': 'iconos/estaciones/linea_1/171.png'
        }, {
            'id': 112,
            'nombre': 'Mexicaltzingo',
            'latitud': 19.4366,
            'longitud': -99.103699,
            'icono+': 'iconos/estaciones/linea_1/112.png'
        }, {
            'id': 114,
            'nombre': 'Atlatilco',
            'latitud': 19.4408,
            'longitud': -99.094299,
            'icono+': 'iconos/estaciones/linea_1/114.png'
        }, {
            'id': 165,
            'nombre': 'Culhuacan',
            'latitud': 19.445801,
            'longitud': -99.087196,
            'icono+': 'iconos/estaciones/linea_1/165.png'
        }, {
            'id': 42,
            'nombre': 'San Andrés Tomatlan',
            'latitud': 19.451,
            'longitud': -99.079399,
            'icono+': 'iconos/estaciones/linea_1/42.png'
        }, {
            'id': 17,
            'nombre': ' Lomas Estrella',
            'latitud': 19.458105,
            'longitud': -99.069257,
            'icono+': 'iconos/estaciones/linea_1/17.png'
        }, {
            'id': 141,
            'nombre': 'Calle 11',
            'latitud': 19.4617,
            'longitud': -99.061302,
            'icono+': 'iconos/estaciones/linea_1/141.png'
        }, {
            'id': 90,
            'nombre': 'Periferico Oriente',
            'latitud': 19.473101,
            'longitud': -99.054497,
            'icono+': 'iconos/estaciones/linea_1/90.png'
        }, {
            'id': 62,
            'nombre': 'Tezonco',
            'latitud': 19.485901,
            'longitud': -99.048897,
            'icono+': 'iconos/estaciones/linea_1/62.png'
        }, {
            'id': 113,
            'nombre': 'Olivos',
            'latitud': 19.490999,
            'longitud': -99.0467,
            'icono+': 'iconos/estaciones/linea_1/113.png'
        }, {
            'id': 88,
            'nombre': 'Nopalera',
            'latitud': 19.500999,
            'longitud': -99.041901,
            'icono+': 'iconos/estaciones/linea_1/88.png'
        }, {
            'id': 45,
            'nombre': 'Zapotitlan',
            'latitud': 19.515301,
            'longitud': -99.036003,
            'icono+': 'iconos/estaciones/linea_1/45.png'
        }, {
            'id': 97,
            'nombre': 'Tlaltenco',
            'latitud': 19.521299,
            'longitud': -99.033401,
            'icono+': 'iconos/estaciones/linea_1/97.png'
        }, {
            'id': 103,
            'nombre': 'Tlahuac',
            'latitud': 19.5285,
            'longitud': -99.030197,
            'icono+': 'iconos/estaciones/linea_1/103.png'
        }]
      }
    ];
    let updateHTML = (elmId, value)=>{
        let elem = doc.querySelector("#"+elmId);
        if(typeof elem !== 'undefined' && elem !== null) {
            elem.innerHTML = value;
        }
    }
    let createOptions = (div,message,Json)=>{
        updateHTML(div,'');
        let options       = `<option >${message}</option>`;
        let myvalueoption = '';
        let mytextoption  = '';
        Json.forEach(lineas=>{
                myvalueoption = lineas.id;
                mytextoption  = lineas.nombre;
                options      +=`<option value="${myvalueoption}">${mytextoption}</option>`;
        });
        updateHTML(div,options);
    }

    let showSelected = div=>{
      let lineaSeleccionada = 0;
      let pre;
      let selected;
      let estacionSelected;
      let estacionSeleccionada;
        if(div == "estacionInit"){
          let image             = 'imagen_estacion_init';
          let lineaSeleccionada = 0;
          let mydiv             = "#init";
          let combo             = doc.querySelector(mydiv);
          selected              = combo.options[combo.selectedIndex].value;
          let comboEstacion     = doc.querySelector('#'+div);
          estacionSelected      = comboEstacion.options[comboEstacion.selectedIndex].value;
          if(selected == 10){
            selected = "a";
          }
          if(selected == 11){
            selected = "b";
          }
          lineaSeleccionada    = selected - 1;
          estacionSeleccionada = estacionSelected - 1;
          let route            = arrayLineas[lineaSeleccionada].estaciones[estacionSeleccionada]['icono+'];
          let img              = `<img src="${route}" width="100%"/>`;
          updateHTML(image,img);
        }
        if(div == "estacionFin"){
            let image             = 'imagen_estacion_fin';
            let lineaSeleccionada = 0;
            let mydiv             = "#fin";
            let combo             = doc.querySelector(mydiv);
            selected              = combo.options[combo.selectedIndex].value;
            let comboEstacion     = doc.querySelector('#'+div);
            estacionSelected      = comboEstacion.options[comboEstacion.selectedIndex].value;
            if(selected == 10){
               selected = "a";
            }
            if(selected == 11){
               selected = "b";
            }
            lineaSeleccionada    = selected - 1;
            estacionSeleccionada = estacionSelected - 1;
            let route            = arrayLineas[lineaSeleccionada].estaciones[estacionSeleccionada]['icono+'];
            let img              = `<img src="${route}" width="100%"/>`;
            updateHTML(image,img);
        }
        if(div == "init" || div == "fin"){
            let mydiv         = "#"+div;
            let combo         = doc.querySelector(mydiv);
            selected          = combo.options[combo.selectedIndex].value;
            lineaSeleccionada = selected - 1;
            if(selected == 10){
               selected = "a";
            }
            if(selected == 11){
               selected = "b";
            }
            if(div == "init"){
               pre = "Init";
            }
            if(div == "fin"){
               pre = "Fin";
            }
            let img             = `<img src="iconos/lineas/${selected}.png" width="100%"/>`;
            updateHTML('imagen_linea_'+div,img);
            const  {estaciones} = arrayLineas[lineaSeleccionada];
            createOptions('estacion'+pre,'Escoge una estación',estaciones);
        }
    }
    createOptions('init','Selecciona una línea',arrayLineas);
    createOptions('fin','Selecciona una línea',arrayLineas);
    doc.querySelector('#init').addEventListener('change',()=>showSelected('init'));
    doc.querySelector('#fin').addEventListener('change',()=>showSelected("fin"));
    doc.querySelector('#estacionInit').addEventListener('change',()=>showSelected('estacionInit'));
    doc.querySelector('#estacionFin').addEventListener('change',()=>showSelected("estacionFin"));
    /*
    const personas = [
        {nombre: 'Juan',edad: 23, aprendiendo:'Javascript'},
        {nombre: 'Pablo',edad: 18, aprendiendo:'PHP'},
        {nombre: 'Alejandra',edad: 21, aprendiendo:'Javascript'},
        {nombre: 'Caren',edad: 30, aprendiendo:'Javascript'},
    ]
    const mayores = personas.filter(persona =>{
        return persona.edad > 28;
    })
    */
})(document);
