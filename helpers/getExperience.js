export const calculateExperience = () => {
  const currentDate = new Date();
  const dateOfJoing = new Date(2021, 2, 1);

  const diff = Math.floor(currentDate.getTime() - dateOfJoing.getTime());
  const day = 1000 * 60 * 60 * 24;

  const days = Math.floor(diff / day);
  const months = Math.floor(days / 31) + 1;
  const years = Math.floor(months / 12);

  let experience = "";
  if (years > 1) {
    experience += years + " Years \n";
  }
  if (years == 1) {
    experience += years + " Year \n";
  }

  if (months < 12) {
    if (months === 1) {
      experience += months + " Month ";
    } else {
      experience += months + " Months ";
    }
  } else if (months > 12) {
    if (months % 12 !== 0) {
      if (months % 12 === 1) {
        experience += (months % 12) + " Month ";
      } else {
        experience += (months % 12) + " Months ";
      }
    }
  }
  return experience;
};
