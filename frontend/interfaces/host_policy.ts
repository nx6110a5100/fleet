import PropTypes from "prop-types";

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  query_id: PropTypes.number,
  query_name: PropTypes.string.isRequired,
  query_description: PropTypes.string,
  response: PropTypes.string,
  resolution: PropTypes.string,
});

export interface IHostPolicy {
  id: number;
  query_id: number;
  query_name: string;
  query_description?: string;
  response: string;
  resolution?: string;
}
