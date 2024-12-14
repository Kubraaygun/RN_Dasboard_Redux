import {ThemeColors} from '../theme/colors';

const setColor = status => {
  switch (status) {
    case statusTypes.COMPLATED:
      return ThemeColors.green;
    case statusTypes.INPROGRESS:
      return ThemeColors.green;
    case statusTypes.INREVIEW:
      return ThemeColors.green;
    case statusTypes.ONHOLD:
      return ThemeColors.green;

    default:
      return ThemeColors.white;
  }
};
