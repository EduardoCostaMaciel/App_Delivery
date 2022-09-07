export const loginEndpointData = {
  endpoint: 'http://localhost:3001/login',
  statusInvalid: 404,
  statusRegisterAccept: 200,
};

export const registerEndpointData = {
  endpoint: 'http://localhost:3001/register',
  statusInvalid: 409,
  statusRegisterAccept: 201,

  deleteRegiter: {
    endpoint: (id) => `http://localhost:3001/user/${id}`,
  },
};

export const saleEndPointData = {
  endpoint: 'http://localhost:3001/sale',
};

export const getUserEndpoint = {
  endpoint: 'http://localhost:3001/user',
};

export const productsEndPointData = {
  endpoint: 'http://localhost:3001/customer/products',
};
