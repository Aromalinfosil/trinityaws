import { useEffect } from 'react';

const useDocTitle = (title) => {
    useEffect(() => {
        if (title) {
            document.title = `${title} - Trinity`;
        } else {
            document.title = 'Trinity  | The Perfect wood Store';
        }
    }, [title]);

    return null;
};

export default useDocTitle;
