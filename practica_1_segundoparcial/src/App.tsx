import { useState, useEffect } from 'react';
import type { Iartista } from './components/artista';
import Artista from "./components/artista";
import Bienvenida from "./components/usuario";
import type { Iusuario } from './components/usuario';
import type { IMembresia } from './components/membresia';
import MembresiaCard from './components/membresia';
import './App.css';

function App() {
  const [artistas, setArtistas] = useState<Iartista[]>([]);
  const [usuarios, setUsuarios] = useState<Iusuario[]>([]);
  const [membresias, setMembresias] = useState<IMembresia[]>([]);

  useEffect(() => {

    const datosSimuladosArtistas: Iartista[] = [
      {
        bio: "Cantante chileno de música indie alternativo.",
        nombre: "Ana López",
        redesSociales: {
          facebook: "facebook.com/ana",
          instagram: "instagram.com/ana_music",
        },
        generoMusical: "Indie",
        fotoUrl: "https://plus.unsplash.com/premium_photo-1681335986095-5a9585e77246?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBhcnRpc3R8ZW58MHx8MHx8fDA%3D"
      },
      {
        bio: "Banda de rock psicodélico experimental.",
        nombre: "Los Viajeros",
        redesSociales: {
          twitter: "twitter.com/losviajeros",
        },
        generoMusical: "Rock psicodélico",
        fotoUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/63/68/28/636828fb-5681-fd42-75c5-bfe027c152c1/198025100765.jpg/486x486bb.png"
      }
    ];


    const datosSimuladosUsuarios: Iusuario[] = [
      {
        id: 1,
        nombre: "Carlos Ruiz",
        correo: "carlos.ruiz@mail.com",
        edad: 28,
        descripcion: "Diseñador UX/UI chileno."
      },
      {
        id: 2,
        nombre: "María Fernández",
        correo: "maria.fdz@mail.com"
      }
    ];


    const datosSimuladosMembresias: IMembresia[] = [
      { id: 1001, usuarioID: 1, monto: 19.99 },
      { id: 1002, usuarioID: 2, monto: 29.99 }
    ];

    setTimeout(() => {
      setArtistas(datosSimuladosArtistas);
      setUsuarios(datosSimuladosUsuarios);
      setMembresias(datosSimuladosMembresias);
    }, 1500);
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>🎤 Lista de Artistas</h1>
      {artistas.length === 0 ? (
        <p>Cargando artistas...</p>
      ) : (
        artistas.map((artista, index) => (
          <Artista key={index} {...artista} />
        ))
      )}

      <h1>👥 Lista de Usuarios</h1>
      {usuarios.length === 0 ? (
        <p>Cargando usuarios...</p>
      ) : (
        usuarios.map((usuario) => (
          <Bienvenida key={usuario.id} nombre={usuario.nombre} correo={usuario.correo} />
        ))
      )}

      <h1>💳 Lista de Membresías</h1>
      {membresias.length === 0 ? (
        <p>Cargando membresías...</p>
      ) : (
        membresias.map((membresia) => {
          const usuario = usuarios.find(u => u.id === membresia.usuarioID);
          return usuario ? (
            <MembresiaCard key={membresia.id} membresia={membresia} usuario={usuario} />
          ) : null;
        })
      )}
    </div>
  );
}

export default App;
