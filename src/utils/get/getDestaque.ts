import { db } from "@/services/firebaseConfig"
import { collection, doc, getDoc, getDocs } from "firebase/firestore"
import { DestaqueProps } from "../destaque.type"

export async function getCidade() {
    const docRef = collection(db, "cidades")

    const snapshot = await getDocs(docRef)

    const lista: DestaqueProps[] = snapshot.docs.map((city) => ({
        name: city.data().name,
        country: city.data().country,
        description: city.data().description,
        imgurl: city.data().imgurl,
        price: city.data().price,
        duration: city.data().duration,
        id: city.id,
        longitude: city.data().longitude,
        latitude: city.data().latitude
    }))

    return lista
}


export async function getCidadeInfo(id: string) {
    const docRef = doc(db, "cidades", id)
    const snapshot = await getDoc(docRef)


    if (!snapshot.exists()) {
        return undefined;
    }

    const lista: DestaqueProps = {
        name: snapshot.data().name,
        country: snapshot.data().country,
        price: snapshot.data().price,
        description: snapshot.data().description,
        imgurl: snapshot.data().imgurl,
        duration: snapshot.data().duration,
        id: snapshot.id,
        longitude: snapshot.data().longitude,
        latitude: snapshot.data().latitude
    }

    return lista
}

export async function getBusca(name: string) {
    const docRef = collection(db, "cidades");

    const snapshot = await getDocs(docRef);

    const lista: DestaqueProps[] = snapshot.docs.map((city) => ({
        name: city.data().name,
        country: city.data().country,
        description: city.data().description,
        imgurl: city.data().imgurl,
        price: city.data().price,
        duration: city.data().duration,
        id: city.id,
        longitude: city.data().longitude,
        latitude: city.data().latitude
    }))

    const filtroBusca = lista.filter((item) => item.name.toUpperCase().includes(name.toUpperCase()))

    return filtroBusca

}