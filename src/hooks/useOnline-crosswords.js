// eslint-disable-next-line unicorn/filename-case

import { useQuery } from '@tanstack/react-query';

import { db as database } from "../firebase";


const fetchOnlineCrosswords = async () => {
    const snapshot = await database.collection('crosswords').get();
    return snapshot.docs.map((document_) => ({ id: document_.id, ...document_.data() }));
};

export const useOnlineCrosswords = () => {
    return useQuery(['crosswords'], fetchOnlineCrosswords);
};
