import { gql, request } from 'graphql-request';

const MASTER_URL = 'https://ap-south-1.cdn.hygraph.com/content/' + process.env.NEXT_PUBLIC_MASTER_URL_KEY + '/master';

export const getCategory = async () => {
  const query = gql`
    query Category {
      categories {
        bgcolor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;

  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;  // Rethrow the error after logging, or handle it appropriately.
  }
};
