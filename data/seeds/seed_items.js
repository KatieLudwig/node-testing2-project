
exports.seed = function(knex) {
  return knex('items').del()
    .then(function () {
      return knex('items').insert([
        { name: 'Item 1', description: 'Description for item 1' },
        { name: 'Item 2', description: 'Description for item 2' }
      ]);
    });
};
