import BASE_URL from '@/lib/baseUrl';

export const createBook = async (params) => {
  try {
    const response = await fetch(`${BASE_URL}/books`, {
      method: 'POST',
      body: params
    });

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const getBooks = async () => {
  try {
    const response = await fetch(`${BASE_URL}/books`);

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};

export const getDetailBooks = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/books/${id}`);

    return response;
  } catch (err) {
    throw new Error({ message: err.response.message });
  }
};
