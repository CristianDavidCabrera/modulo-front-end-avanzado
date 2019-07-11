import './styles/detail.scss';
import api from './js/api';

const {getShowsDetails} = api();

const renderDetail = async () => {
    try {
        const [ ,id] = window.location.search ? 
        window.location.search.split('=') : [];
        const show = await getShowsDetails(id);
        console.log(show);
    } catch (error) {
        console.error(error);
    }
};

renderDetail();
console.log('DETAIL!!!!!!!!!!!!!');