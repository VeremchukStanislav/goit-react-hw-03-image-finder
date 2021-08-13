import axios from 'axios';

const fetchImages = ({searchQuery = '', currentPage = 1, pageSize = 12}) => {
  return axios
    .get(
    `https://pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=21907274-5e9640005dddd1cbe205bab1c&image_type=photo&orientation=horizontal&per_page=${pageSize}`,
    )
    .then(response => response.data.hits);
};

export default { fetchImages };