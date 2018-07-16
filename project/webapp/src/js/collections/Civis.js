import { Collection } from 'backbone';
import { Civi } from '../models';

const Civis = Collection.extend({
  model: Civi,
  url: '/api/v1/civis',
  comparator: 'id',

  filterByType(type) {
    const filtered = this.models.filter(civi => civi.get('type') === type);
    return filtered;
  },
});

export default Civis;