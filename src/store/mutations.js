import router from '../router'
export const state = {
  connect: false,
  message: null,
  version: '01',
  status: false,
  count:0,
  listStatus:[
    { id: 1, text: 'Ready', active: false },
    { id: 2, text: 'Not Ready', active: false },
    { id: 3, text: 'StandBy', active: false }
  ],
  listThreads: [
    // { id: 1, text: 'Thread numero 1', active: false, sessionID: '0123fwefdfsdfffwef' },
    // { id: 2, text: 'Thread numero 2', active: false, sessionID: 'shfwefffhds340r03459034590' }
  ],
  listMessage: [],
  loggedIn: false,
  loginError: null,
  userName: null,
  room:'',
  io:{}
}

export const mutations = {
  SET_SOCKET: (state, socket) => {
   console.log(socket)
   state.io = socket
   console.log('socket connected')


  },
  SOCKET_CHAT_MESSAGE (state, message)  {
    console.log(state, message)
    state.message = message
  },
  SOCKET_ON_USER_LOGGED (state, message) {
    state.message = message

  },
  SOCKET_COUNTER_INCREMENT (state) {
   state.count = state.count + 1
  },
  SOCKET_COUNTER_DECREMENT (state) {
    state.count = state.count - 1
  },
  SOCKET_CONNECT: (state, status) => {
    state.connect = true;
  },
  SOCKET_USER_MESSAGE: (state, message) => {
    state.message = message;
  },
  TOOGLE_STATUS: state => state.status = !state.status,
  LOGGED_IN(state, data) {
    state.loggedIn = true,
    state.io.emit("AGENT_LOGGED", data);

    console.log(socket)
    let redirectTo = state.route.query.redirect || '/'
    router.push(redirectTo)
  },
  LOGGED_OUT(state) {
    state.loggedIn = false
    router.push('/login')
  },
  LOGIN_ERROR(state, message) {
    state.loginError = message
  },
  CURRENT_STATUS(state, data){
    state.listStatus.find(listStatus => listStatus.active = data.active);
  },
  CURRENT_THREAD_ACTIVE(state, data){
    state.listThreads.find(listThreads => listThreads.active = data.active);
  },
  SET_THREAD_BY_ID(state, data) {
    const sessionID = data.sessionID
    state.listThreads.map(listThreads => listThreads.active = false);
    var currentID = state.listThreads.find(listThreads => listThreads.id = data.id);
    router.push({ name: 'thread', params: { sessionID: sessionID }})
    //router.push({ path: `/thread/${userId}` }) // -> /user/123
  },
  JOIN_ROOM(state, data){
    state.room = data;
  },
  ADD_MESSAGE(state,newMsg){
    state.io.emit("ADD_MESSAGE",newMsg);

    state.io.on('CHAT_MESSAGE', function (data) {
      console.log(data);
    });

    var setMesg = {
      msg:newMsg,
      status:false
    }
    state.listMessage.push(setMesg)
  },
}
