import { gql, request } from 'graphql-request';

const MASTER_URL = 'https://api-us-east-1-shared-usea1-02.hygraph.com/v2/' + process.env.NEXT_PUBLIC_MASTER_URL_KEY + '/master';

const getCategory = async () => {
  const query = gql`query Category {
      categories {
        id
        name
        bgcolor {
          hex
        }
        icon {
          url
        }
      }
    }`;
  const result = await request(MASTER_URL, query);
  return result;
};

export default { getCategory }