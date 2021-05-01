import { firestore } from './firebase';

const API = {
  // firebase firestore 기반 db query
  async getAll<T>(collection: string) {
    const result: T[] = [];
    const docs = await firestore.collection(collection).get();

    docs.forEach(doc => result.push({ id: doc.id, ...(doc.data() as T) }));

    return result;
  },

  add<T>(item: T, collection: string) {
    return firestore.collection(collection).add(item);
  },
};

export default API;
