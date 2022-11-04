import { useQuery } from '@tanstack/react-query';
import { UserModel } from '../models/user-model';
import { client } from './api-service';

const fetchList = async (): Promise<UserModel[]> => {
  const result = await client.get<UserModel[]>('users');
  return result.data;
}

const UseList = () => useQuery<UserModel[], Error>(['listUser'], fetchList);

export default UseList;