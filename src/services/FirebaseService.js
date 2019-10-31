import { db } from '../utils/firebaseUtils';

export function getPeople() {
    return db.collection('people').get()
}

export function savePerson(person){
    return db.collection('people').add(person)
}

export function deletePerson(id) {
    return db.collection('people').doc(id).delete()
}