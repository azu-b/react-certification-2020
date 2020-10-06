const mockedUser = {
  id: '95',
  name: 'Rayo McQueen',
  user: 'RayoMcQueen',
};

const LogInAPI = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === 'RayoMcQueen' && password === 'Kuchao!') {
        return resolve(mockedUser);
      }
      return reject(new Error('Username or password invalid'));
    }, 500);
  });
};

export default LogInAPI;
