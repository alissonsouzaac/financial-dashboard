import { app } from "./firebase";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);

const loginEmailPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
        // Login bem-sucedido
    } catch (error) {
        console.error(error.message);
        throw new Error('Falha no login');
    }
}

const registerEmailPassword = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        // Pode adicionar lógica adicional aqui, se necessário
    } catch (error) {
        console.error(error.message);
        throw new Error('Falha no registro');
    }
}

const loginWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider);
        // Login bem-sucedido com o Google
    } catch (error) {
        console.error(error.message);
        throw new Error('Falha no login com o Google');
    }
}

const registerWithGoogle = async () => {
    try {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        const user = res.user;
        // Pode adicionar lógica adicional aqui, se necessário
    } catch (error) {
        console.error(error.message);
        throw new Error('Falha no registro com o Google');
    }
}

export { 
    auth,
    loginEmailPassword,
    registerEmailPassword,
    loginWithGoogle,
    registerWithGoogle
}
