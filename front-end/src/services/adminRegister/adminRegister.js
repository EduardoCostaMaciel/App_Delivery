const { registerEndpointData } = require('../../utils/endPointsData');

const { CONFLICT_STATUS, CREATED_STATUS } = require('../../utils/statusCodes');

const adminRegister = async (request, setStatus) => {
  const { token } = JSON.parse(localStorage.getItem('user'));

  const requestOptions = {
    headers: { 'Content-Type': 'application/json', Authorization: token },
    method: 'POST',
    body: JSON.stringify(request),
  };

  try {
    const response = await fetch(registerEndpointData.endpoint, requestOptions);
    if (!response.ok) {
      if (response.status === CONFLICT_STATUS) setStatus(CONFLICT_STATUS);
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    } else {
      setStatus(CREATED_STATUS);
    }
  } catch (error) {
    console.error(error);
  }
};

export default adminRegister;
