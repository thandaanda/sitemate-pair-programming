const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles time after 30 mins - 2:33', () => {
    const timeInWords = convertTimeToWords('2:33');
    expect(timeInWords).toBe('twenty-seven to three')
  })

  it('Handles midday', () => {
    const timeInWords = convertTimeToWords('12:00');
    expect(timeInWords).toBe('midday');
  });

  it('Handles o\'clock', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe('two o\'clock');
  });

  it('Handles past', () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe('three past two');
  });

  it('Handles past', () => {
    const timeInWords = convertTimeToWords('2:11');
    expect(timeInWords).toBe('eleven past two');
  });

  it('Handles quarter past', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });

  it('Handles half past', () => {
    const timeInWords = convertTimeToWords('2:30');
    expect(timeInWords).toBe('half past two');
  });

  it('Handles to', () => {
    const timeInWords = convertTimeToWords('2:40');
    expect(timeInWords).toBe('twenty to three');
  });

  it('Handles quarter to', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles five to', () => {
    const timeInWords = convertTimeToWords('2:55');
    expect(timeInWords).toBe('five to three');
  });

  it('Handles twenty-seven to', () => {
    const timeInWords = convertTimeToWords('2:33');
    expect(timeInWords).toBe('twenty-seven to three');
  });

  it('Handles twenty-three to midday', () => {
    const timeInWords = convertTimeToWords('11:37');
    expect(timeInWords).toBe('twenty-three to midday');
  });

  it('Handles twenty-three to midnight', () => {
    const timeInWords = convertTimeToWords('23:37');
    expect(timeInWords).toBe('twenty-three to midnight');
  });
  
});
