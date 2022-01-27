

function giveMeWord_Ofucada(word) {
  word_end = "";
  switch (word) {
    case "a":
      word_end = "00"
      break;
      case "b":
        word_end = "10"
        break;
        case "c":
          word_end = "01"
          break;
          case "d":
            word_end = "11"
            break;
            case "e":
              word_end = "02"
              break;
              case "f":
                word_end = "20"
                break;
                case "g":
                  word_end = "22"
                  break;
                  case "h":
                    word_end = "03"
                    break;
                    case "i":
                      word_end = "30"
                      break;
                      case "j":
                        word_end = "33"
                        break;
                        case "k":
                          word_end = "04"
                          break;
                          case "l":
                            word_end = "40"
                            break;
                            case "m":
                              word_end = "44"
                              break;
                              case "n":
                                word_end = "05"
                                break;
                                case "ñ":
                                  word_end = "50"
                                  break;
                                  case "o":
                                    word_end = "55"
                                    break;
                                    case "p":
                                      word_end = "60"
                                      break;
                                      case "q":
                                        word_end = "06"
                                        break;
                                        case "r":
                                          word_end = "66"
                                          break;
                                          case "s":
                                            word_end = "70"
                                            break;
                                            case "t":
                                              word_end = "07"
                                              break;
                                              case "u":
                                                word_end = "77"
                                                break;
                                                case "v":
                                                  word_end = "80"
                                                  break;
                                                  case "w":
                                                    word_end = "08"
                                                    break;
                                                    case "x":
                                                      word_end = "88"
                                                      break;
                                                      case "y":
                                                        word_end = "90"
                                                        break;
                                                        case "z":
                                                          word_end = "09"
                                                          break;
                                                          case " ":
                                                            word_end = "99"
                                                            break;


    default:
      break;
  }
  return word_end;
}
function giveMeWord_deOfucada(word) {
  word_end = "";
  switch (word) {
    case "00":
      word_end = "a"
      break;
      case "10":
        word_end = "b"
        break;
        case "01":
          word_end = "c"
          break;
          case "11":
            word_end = "d"
            break;
            case "02":
              word_end = "e"
              break;
              case "20":
                word_end = "f"
                break;
                case "22":
                  word_end = "g"
                  break;
                  case "03":
                    word_end = "h"
                    break;
                    case "30":
                      word_end = "i"
                      break;
                      case "33":
                        word_end = "j"
                        break;
                        case "04":
                          word_end = "k"
                          break;
                          case "40":
                            word_end = "l"
                            break;
                            case "44":
                              word_end = "m"
                              break;
                              case "05":
                                word_end = "n"
                                break;
                                case "50":
                                  word_end = "ñ"
                                  break;
                                  case "55":
                                    word_end = "o"
                                    break;
                                    case "60":
                                      word_end = "p"
                                      break;
                                      case "06":
                                        word_end = "q"
                                        break;
                                        case "66":
                                          word_end = "r"
                                          break;
                                          case "70":
                                            word_end = "s"
                                            break;
                                            case "07":
                                              word_end = "t"
                                              break;
                                              case "77":
                                                word_end = "u"
                                                break;
                                                case "80":
                                                  word_end = "v"
                                                  break;
                                                  case "08":
                                                    word_end = "w"
                                                    break;
                                                    case "88":
                                                      word_end = "x"
                                                      break;
                                                      case "90":
                                                        word_end = "y"
                                                        break;
                                                        case "09":
                                                          word_end = "z"
                                                          break;
                                                          case "99":
                                                            word_end = " "
                                                            break;


    default:
      break;
  }
  return word_end;
}
function obfucar(word) {
  word_end = "";
  for (let i = 0; i < word.length; i += 1) {
    word_end += giveMeWord_Ofucada(word.charAt(i));
  }
  return word_end;
}
function deobfucar(word) {
  word_end = "";
  for (let i = 0; i < word.length; i+=2) {
    word_end += giveMeWord_deOfucada(word.charAt(i) + word.charAt(i+1));
  }
  return word_end;
}
function accion() {
  text_area_clean = document.getElementById('textarea-edit2').value;
  text_area_obfucator = document.getElementById('textarea-edit');
  text_area_obfucator.value = obfucar(text_area_clean);
}
function deaccion() {
  text_area_clean = document.getElementById('textarea-edit2');
  text_area_obfucator = document.getElementById('textarea-edit').value;
  text_area_clean.value = deobfucar(text_area_obfucator);
}
