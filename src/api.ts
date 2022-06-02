import axios, { AxiosResponse } from 'axios';
// require('dotenv').config()

export const test = 1;
axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: `http://localhost:3001` as string,
});
type buyTicketProps = {
  ticketId: number;
  concertId: number;
};
type SignUpProps = {
  userId: string;
  password: string;
  address: string;
};

type SignInProps = {
  userId: string;
  password: string;
};

type seatInfoProp = {
  type: string;
  price: number;
  max: number;
};

type ConcertInfoProps = {
  title: string;
  location: string;
  date: string;
  startTime: string;
  endTime: string;
  age: string;
  max: string;
  concertImg: string;
  seatImg: string;
  seatInfo: seatInfoProp[];
  tokenIds: number[];
};

export const authApi = {
  signUp: ({
    userId,
    password,
    address,
  }: SignUpProps): Promise<AxiosResponse<any>> =>
    api.post(
      '/users/signup',
      {
        userId,
        password,
        address,
      },
      { withCredentials: false }
    ),
  signIn: ({ userId, password }: SignInProps): Promise<AxiosResponse<any>> =>
    api.post(
      '/users/signin',
      {
        userId,
        password,
      },
      { withCredentials: true }
    ),
  logOut: (): Promise<AxiosResponse<any>> =>
    api.post('/users/logout', {}, { withCredentials: true }),
};

export const myInfo = {
  getMyConcerts: (): Promise<AxiosResponse<any>> =>
    api.get('/users/concerts/false'),
  getMyTickets: (): Promise<AxiosResponse<any>> =>
    api.get('/users/tickets/false'),
};

export const concerts = {
  saveConcertImg: async (e: any) => {
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const formData = new FormData();
      formData.append('files', uploadFile);
      return await axios({
        method: 'post',
        url: '/concerts/concert_img',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
  },
  saveSeatImg: async (e: any) => {
    if (e.target.files) {
      const uploadFile = e.target.files[0];
      const formData = new FormData();
      formData.append('files', uploadFile);
      return await axios({
        method: 'post',
        url: '/concerts/seat_img',
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    }
  },
  saveConcert: ({
    title,
    location,
    date,
    startTime,
    endTime,
    age,
    max,
    concertImg,
    seatImg,
    seatInfo,
    tokenIds,
  }: ConcertInfoProps) =>
    api.post('/concerts', {
      title,
      location,
      date,
      startTime,
      endTime,
      age,
      max,
      concertImg,
      seatImg,
      seatInfo,
      tokenIds,
    }),
  editConcert: ({
    title,
    location,
    date,
    startTime,
    endTime,
    age,
    max,
    concertImg,
    seatImg,
    seatInfo,
    tokenIds,
  }: ConcertInfoProps) =>
    api.put('/concerts', {
      title,
      location,
      date,
      startTime,
      endTime,
      age,
      max,
      concertImg,
      seatImg,
      seatInfo,
      tokenIds,
    }),
  getConcerts: () => api.get('/concerts/list/true'),
  getConcertByIdx: (ticketId: number) => api.get(`/concerts/${ticketId}`),
};

export const tickets = {
  getMyTicketByIdx: (ticketId: number): Promise<AxiosResponse<any>> =>
    api.get(`/tickets/${ticketId}`),
  buyTicket: ({
    ticketId,
    concertId,
  }: buyTicketProps): Promise<AxiosResponse<any>> =>
    api.post('tickets', {
      ticketId,
      concertId,
    }),
  refundTicket: (ticketId: number): Promise<AxiosResponse<any>> =>
    api.delete(`/ticket/${ticketId}`),
};
