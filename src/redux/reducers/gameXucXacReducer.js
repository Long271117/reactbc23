// state là một object có 4 thuộc tính
const stateDefault = {
  banChon: true, // true: Tài, false: Xỉu
  soBanThang: 0,
  tongSoBanChoi: 0,
  mangXucXac: [
    { hinhAnh: "./img/gameXucXac/1.png", diem: 1 }, // Đường dẫn binding ra giao diện nên đi từ public
    { hinhAnh: "./img/gameXucXac/2.png", diem: 1 },
    { hinhAnh: "./img/gameXucXac/3.png", diem: 1 },
  ],
};

export const gameXucXacReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "DAT_CUOC": {
      state.banChon = action.banChon;
      return { ...state };
    }

    case "PLAY_GAME": {
      // Random 3 xúc xắc
      let mangXucXacNgauNhien = [];
      for (let i = 0; i < 3; i++) {
        // Mỗi lần lặp sẽ tạo ra 1 con số ngầu nhiên từ hàm js
        let soNgauNhien = Math.floor(Math.random() * 6 + 1);
        // Từ số ngẫu nhiên tạo ra xúc xắc ngẫu nhiên
        let xxnn = {
          hinhAnh: `./img/gameXucXac/${soNgauNhien}.png`,
          diem: soNgauNhien,
        };
        // Đưa số ngẫu nhiên vào mangXacXacNgauNhien
        mangXucXacNgauNhien.push(xxnn);
      }
      state.mangXucXac = mangXucXacNgauNhien;
      console.log(state.mangXucXac);
      // Tính tổng điểm bằng cách duyệt qua từng object xuc xắc trong mảng xxnn và lấy điểm cộng dồn vào tổng điểm
      let tongDiem = 0;
      for (let xucXac of mangXucXacNgauNhien) {
        tongDiem += xucXac.diem;
      }

      // Xử lý thắng thua
      if (
        (state.banChon && tongDiem > 11) ||
        (!state.banChon && tongDiem <= 11)
      ) {
        state.soBanThang += 1;
      }

      // Tăng tổng số bàn chơi
      state.tongSoBanChoi += 1;

      return { ...state };
    }

    default:
      return state;
  }
};
