

import { useEffect } from 'react';

const useTitle = title => {
    useEffect(() => {
        document.title = `${title} | Car Hub`;
    },[title])
};

export default useTitle;