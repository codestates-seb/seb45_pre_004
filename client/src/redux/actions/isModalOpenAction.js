export const OPEN = "OPEN";
export const CLOSE = "CLOSE";

export const openModalAction = () => {
    return { type: OPEN };
}

export const closeModalAction = () => {
    return { type: CLOSE };
}