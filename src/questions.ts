import { Question } from './types';

export const questions: Question[] = [
  // MỨC ĐỘ 1: NHẬN BIẾT (DỄ)
  {
    id: 1,
    type: 'multiple-choice',
    level: 1,
    content: 'Công thức tính vận tốc (v) khi biết quãng đường (s) và thời gian (t) là:',
    options: ['v = s × t', 'v = s : t', 'v = t : s', 'v = s + t'],
    answer: 'v = s : t',
    explanation: 'Vận tốc bằng quãng đường chia cho thời gian.'
  },
  {
    id: 2,
    type: 'true-false',
    level: 1,
    content: 'Đơn vị của vận tốc có thể là km/giờ hoặc m/phút.',
    answer: true,
    explanation: 'Đúng, đơn vị vận tốc phụ thuộc vào đơn vị của quãng đường và thời gian.'
  },
  {
    id: 3,
    type: 'fill-in-the-blank',
    level: 1,
    content: 'Muốn tính quãng đường ta lấy vận tốc ....... với thời gian.',
    answer: 'nhân',
    explanation: 'Công thức tính quãng đường là s = v × t.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    level: 1,
    content: 'Một người đi bộ trong 2 giờ được 10km. Vận tốc của người đó là:',
    options: ['20 km/giờ', '5 km/giờ', '12 km/giờ', '8 km/giờ'],
    answer: '5 km/giờ',
    explanation: 'v = 10 : 2 = 5 (km/giờ).'
  },
  {
    id: 5,
    type: 'short-answer',
    level: 1,
    content: 'Tính thời gian đi của một xe máy nếu biết quãng đường là 120km và vận tốc là 40km/giờ. (Chỉ ghi số)',
    answer: '3',
    explanation: 't = 120 : 40 = 3 (giờ).'
  },
  {
    id: 6,
    type: 'multiple-choice',
    level: 1,
    content: 'Đơn vị đo thời gian thường dùng trong bài toán chuyển động là:',
    options: ['km, m', 'giờ, phút, giây', 'km/giờ, m/giây', 'kg, g'],
    answer: 'giờ, phút, giây',
    explanation: 'Giờ, phút, giây là các đơn vị đo thời gian.'
  },
  {
    id: 7,
    type: 'true-false',
    level: 1,
    content: 'Công thức tính thời gian là t = s : v.',
    answer: true,
    explanation: 'Đúng, thời gian bằng quãng đường chia cho vận tốc.'
  },

  // MỨC ĐỘ 2: THÔNG HIỂU (TRUNG BÌNH)
  {
    id: 8,
    type: 'multiple-choice',
    level: 2,
    content: 'Một con ốc sên bò với vận tốc 12 cm/phút. Hỏi sau 5 phút con ốc sên bò được bao nhiêu xăng-ti-mét?',
    options: ['60 cm', '17 cm', '7 cm', '2.4 cm'],
    answer: '60 cm',
    explanation: 's = 12 × 5 = 60 (cm).'
  },
  {
    id: 9,
    type: 'fill-in-the-blank',
    level: 2,
    content: '1,5 giờ bằng ....... phút.',
    answer: '90',
    explanation: '1,5 × 60 = 90 (phút).'
  },
  {
    id: 10,
    type: 'multiple-choice',
    level: 2,
    content: 'Một ô tô đi từ A lúc 7 giờ 30 phút và đến B lúc 10 giờ. Thời gian ô tô đi từ A đến B là:',
    options: ['3 giờ 30 phút', '2 giờ 30 phút', '17 giờ 30 phút', '2 giờ'],
    answer: '2 giờ 30 phút',
    explanation: '10 giờ - 7 giờ 30 phút = 2 giờ 30 phút.'
  },
  {
    id: 11,
    type: 'short-answer',
    level: 2,
    content: 'Một người đi xe đạp với vận tốc 15km/giờ trong 45 phút. Tính quãng đường người đó đi được (km). (Ghi kết quả dưới dạng số thập phân)',
    answer: '11.25',
    explanation: 'Đổi 45 phút = 0,75 giờ. s = 15 × 0,75 = 11,25 (km).'
  },
  {
    id: 12,
    type: 'true-false',
    level: 2,
    content: 'Vận tốc 36 km/giờ bằng vận tốc 10 m/giây.',
    answer: true,
    explanation: '36 km/giờ = 36000m / 3600 giây = 10 m/giây.'
  },
  {
    id: 13,
    type: 'multiple-choice',
    level: 2,
    content: 'Một máy bay bay được 1800km trong 2,5 giờ. Vận tốc của máy bay là:',
    options: ['720 km/giờ', '4500 km/giờ', '800 km/giờ', '600 km/giờ'],
    answer: '720 km/giờ',
    explanation: 'v = 1800 : 2,5 = 720 (km/giờ).'
  },
  {
    id: 14,
    type: 'fill-in-the-blank',
    level: 2,
    content: 'Nếu vận tốc là 60 km/giờ, thời gian là 20 phút thì quãng đường là ....... km.',
    answer: '20',
    explanation: '20 phút = 1/3 giờ. s = 60 × 1/3 = 20 (km).'
  },

  // MỨC ĐỘ 3: VẬN DỤNG (KHÓ)
  {
    id: 15,
    type: 'multiple-choice',
    level: 3,
    content: 'Một người đi xe máy từ A lúc 8 giờ 15 phút đến B lúc 10 giờ. Biết quãng đường AB dài 63km. Vận tốc của xe máy là:',
    options: ['36 km/giờ', '42 km/giờ', '31.5 km/giờ', '40 km/giờ'],
    answer: '36 km/giờ',
    explanation: 'Thời gian đi: 10 giờ - 8 giờ 15 phút = 1 giờ 45 phút = 1,75 giờ. v = 63 : 1,75 = 36 (km/giờ).'
  },
  {
    id: 16,
    type: 'short-answer',
    level: 3,
    content: 'Một tàu hỏa đi với vận tốc 45 km/giờ. Tính thời gian tàu hỏa đi hết quãng đường 112,5 km. (Ghi kết quả dưới dạng: x giờ y phút)',
    answer: '2 giờ 30 phút',
    explanation: 't = 112,5 : 45 = 2,5 (giờ) = 2 giờ 30 phút.'
  },
  {
    id: 17,
    type: 'multiple-choice',
    level: 3,
    content: 'Một vận động viên chạy 100m hết 10,5 giây. Vận tốc của vận động viên đó (làm tròn đến chữ số thập phân thứ hai) là:',
    options: ['9.52 m/giây', '10.5 m/giây', '9.5 m/giây', '10.0 m/giây'],
    answer: '9.52 m/giây',
    explanation: 'v = 100 : 10,5 ≈ 9,52 (m/giây).'
  },
  {
    id: 18,
    type: 'true-false',
    level: 3,
    content: 'Hai ô tô cùng đi quãng đường 120km. Xe A đi hết 2 giờ, xe B đi hết 2 giờ 30 phút. Vận tốc xe A lớn hơn vận tốc xe B.',
    answer: true,
    explanation: 'Cùng quãng đường, xe nào đi thời gian ít hơn thì vận tốc lớn hơn.'
  },
  {
    id: 19,
    type: 'fill-in-the-blank',
    level: 3,
    content: 'Một con cá heo bơi với vận tốc 900 m/phút. Trong 1,2 giờ con cá heo đó bơi được ....... km.',
    answer: '64.8',
    explanation: '1,2 giờ = 72 phút. s = 900 × 72 = 64800 (m) = 64,8 (km).'
  },
  {
    id: 20,
    type: 'multiple-choice',
    level: 3,
    content: 'Quãng đường từ nhà An đến trường dài 1,5km. An đi bộ với vận tốc 50 m/phút. An đi từ nhà lúc 6 giờ 30 phút thì đến trường lúc mấy giờ?',
    options: ['7 giờ', '6 giờ 45 phút', '7 giờ 15 phút', '6 giờ 50 phút'],
    answer: '7 giờ',
    explanation: '1,5km = 1500m. Thời gian đi: 1500 : 50 = 30 (phút). Đến trường lúc: 6 giờ 30 phút + 30 phút = 7 giờ.'
  },
  {
    id: 21,
    type: 'short-answer',
    level: 3,
    content: 'Một ô tô đi từ A đến B với vận tốc 48 km/giờ. Sau đó từ B quay về A với vận tốc 40 km/giờ. Biết quãng đường AB dài 120km. Tổng thời gian cả đi và về là bao nhiêu giờ?',
    answer: '5.5',
    explanation: 'Thời gian đi: 120 : 48 = 2,5 (giờ). Thời gian về: 120 : 40 = 3 (giờ). Tổng: 2,5 + 3 = 5,5 (giờ).'
  },

  // MỨC ĐỘ 4: VẬN DỤNG CAO (RẤT KHÓ)
  {
    id: 22,
    type: 'multiple-choice',
    level: 4,
    content: 'Hai thành phố A và B cách nhau 135km. Một ô tô đi từ A đến B với vận tốc 45 km/giờ. Cùng lúc đó một xe máy đi từ B về A với vận tốc 30 km/giờ. Sau bao lâu hai xe gặp nhau?',
    options: ['1.8 giờ', '2 giờ', '3 giờ', '4.5 giờ'],
    answer: '1.8 giờ',
    explanation: 'Tổng vận tốc: 45 + 30 = 75 (km/giờ). Thời gian gặp nhau: 135 : 75 = 1,8 (giờ).'
  },
  {
    id: 23,
    type: 'short-answer',
    level: 4,
    content: 'Một người đi xe đạp từ A đến B với vận tốc 12 km/giờ. Sau 3 giờ, một xe máy cũng đi từ A đến B với vận tốc 36 km/giờ. Hỏi sau bao lâu kể từ lúc xe máy bắt đầu đi thì xe máy đuổi kịp xe đạp? (giờ)',
    answer: '1.5',
    explanation: 'Khoảng cách khi xe máy bắt đầu đi: 12 × 3 = 36 (km). Hiệu vận tốc: 36 - 12 = 24 (km/giờ). Thời gian đuổi kịp: 36 : 24 = 1,5 (giờ).'
  },
  {
    id: 24,
    type: 'fill-in-the-blank',
    level: 4,
    content: 'Một ca nô đi xuôi dòng từ A đến B hết 2 giờ và đi ngược dòng từ B về A hết 3 giờ. Biết vận tốc dòng nước là 3 km/giờ. Quãng đường AB dài ....... km.',
    answer: '36',
    explanation: 'Gọi vận tốc ca nô là v. Ta có: (v+3)×2 = (v-3)×3 => 2v+6 = 3v-9 => v=15. Quãng đường AB = (15+3)×2 = 36 (km).'
  },
  {
    id: 25,
    type: 'multiple-choice',
    level: 4,
    content: 'Một đoàn tàu hỏa dài 200m đi qua một cái cầu dài 400m hết 30 giây. Vận tốc của đoàn tàu là:',
    options: ['20 m/giây', '13.33 m/giây', '6.67 m/giây', '10 m/giây'],
    answer: '20 m/giây',
    explanation: 'Quãng đường tàu đi được: 200 + 400 = 600 (m). Vận tốc: 600 : 30 = 20 (m/giây).'
  },
  {
    id: 26,
    type: 'true-false',
    level: 4,
    content: 'Nếu vận tốc tăng lên gấp đôi và thời gian giảm đi một nửa thì quãng đường không thay đổi.',
    answer: true,
    explanation: 's = v × t. Nếu v\' = 2v và t\' = t/2 thì s\' = 2v × t/2 = v × t = s.'
  },
  {
    id: 27,
    type: 'short-answer',
    level: 4,
    content: 'Một người đi từ A đến B. Nửa quãng đường đầu đi với vận tốc 40 km/giờ, nửa quãng đường sau đi với vận tốc 60 km/giờ. Vận tốc trung bình của người đó trên cả quãng đường AB là bao nhiêu km/giờ?',
    answer: '48',
    explanation: 'Vtb = (2 × v1 × v2) / (v1 + v2) = (2 × 40 × 60) / (40 + 60) = 4800 / 100 = 48 (km/giờ).'
  },
  {
    id: 28,
    type: 'multiple-choice',
    level: 4,
    content: 'Lúc 7 giờ một xe máy đi từ A với vận tốc 40 km/giờ. Đến 8 giờ 15 phút một ô tô cũng đi từ A đuổi theo xe máy với vận tốc 60 km/giờ. Ô tô đuổi kịp xe máy lúc mấy giờ?',
    options: ['10 giờ 45 phút', '10 giờ 15 phút', '9 giờ 45 phút', '11 giờ'],
    answer: '10 giờ 45 phút',
    explanation: 'Thời gian xe máy đi trước: 1 giờ 15 phút = 1,25 giờ. Khoảng cách: 40 × 1,25 = 50 (km). Hiệu vận tốc: 60 - 40 = 20 (km/giờ). Thời gian đuổi kịp: 50 : 20 = 2,5 giờ = 2 giờ 30 phút. Đuổi kịp lúc: 8 giờ 15 phút + 2 giờ 30 phút = 10 giờ 45 phút.'
  },
  {
    id: 29,
    type: 'fill-in-the-blank',
    level: 4,
    content: 'Một con thuyền đi xuôi dòng từ A đến B hết 45 phút. Biết vận tốc thực của thuyền là 12 km/giờ và vận tốc dòng nước là 2 km/giờ. Quãng đường AB dài ....... km.',
    answer: '10.5',
    explanation: 'Vận tốc xuôi dòng: 12 + 2 = 14 (km/giờ). 45 phút = 0,75 giờ. s = 14 × 0,75 = 10,5 (km).'
  },
  {
    id: 30,
    type: 'multiple-choice',
    level: 4,
    content: 'Một người đi xe đạp từ A đến B với vận tốc 15 km/giờ. Khi từ B về A người đó đi với vận tốc 12 km/giờ nên thời gian về lâu hơn thời gian đi là 30 phút. Quãng đường AB dài là:',
    options: ['30 km', '45 km', '60 km', '15 km'],
    answer: '30 km',
    explanation: 'Tỉ số vận tốc đi và về là 15/12 = 5/4. Tỉ số thời gian đi và về là 4/5. Hiệu thời gian là 1 phần = 30 phút. Thời gian đi là 4 phần = 120 phút = 2 giờ. Quãng đường AB = 15 × 2 = 30 (km).'
  }
];
