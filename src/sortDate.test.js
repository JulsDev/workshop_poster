import sortDate from './sortDate';

test('should return sorting array: simple case with one year', () => {
  const str = ['Oct 22, 2009', 'Jan 10, 2009', 'Feb 8, 2009'];

  const result = sortDate(str);

  expect(result).toEqual([
    'Jan 10, 2009', 'Feb 8, 2009', 'Oct 22, 2009'
  ]);
});

test('should return sorting array: case with different years', () => {
  const str = ['Jan 8, 1995', 'Jan 8, 1998', 'Oct 22, 2009', 'Jan 10, 2001', 'Feb 8, 1998'];

  const result = sortDate(str);

  expect(result).toEqual([
    'Jan 8, 1995', 'Jan 8, 1998', 'Feb 8, 1998', 'Jan 10, 2001', 'Oct 22, 2009'
  ]);
});

test('should return sorting array', () => {
  const str = [
    'Jan 8, 1995',
    'Jan 8, 1998',
    'Oct 7, 2009',
    'Nov 10, 2009',
    'Jan 10, 2009',
    'Oct 22, 2009',
    'Jan 10, 2001',
    'Feb 8, 1998'
  ];

  const result = sortDate(str);

  expect(result).toEqual([
    'Jan 8, 1995', 'Jan 8, 1998', 'Feb 8, 1998', 'Jan 10, 2001', 'Jan 10, 2009', 'Oct 7, 2009', 'Oct 22, 2009', 'Nov 10, 2009'
  ]);
});