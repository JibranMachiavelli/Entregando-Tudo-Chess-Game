'user client';

const Logins = [
  {
    login: 'user',
    senha: 'Ti00',
    nomeUsuario: 'Geral',
    urlicon: '#',
  },
  {
    login: '',
    senha: '',
    nomeUsuario: '',
    urlicon: '',
  },
  {
    login: 'Jibran',
    senha: 'Ti01',
    nomeUsuario: 'Jibran',
    urlicon: '#',
  },
  {
    login: 'Peri',
    senha: 'Ti02',
    nomeUsuario: 'Peri',
    urlicon: '#',
  },
  {
    login: 'Tata',
    senha: 'Ti03',
    nomeUsuario: 'Tata',
    urlicon: '#',
  },
];

export async function login(loginTentativa: string, senhaTentativa: string) {
  const user = Logins.find(
    (login) => login.login === loginTentativa && login.senha === senhaTentativa
  );
  if (user) {
    return { nomeUsuario: user.nomeUsuario, urlicon: user.urlicon };
  } else {
    return null;
  }
}
