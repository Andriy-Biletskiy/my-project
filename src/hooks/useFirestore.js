import { useEffect,useState } from 'react';

import { auth , db as database_ } from '../firebase';


export const useFirestore = (collection) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubscribe = database.collection(collection).onSnapshot((snapshot) => {
            setData(snapshot.docs.map((document_) => ({ id: document_.id, ...document_.data() })));
        });
        return () => unsubscribe();
    }, [collection]);

    const addDocument = async (document_) => {
        await database.collection(collection).add(document_);
    };

    return { data, addDocument };
};
