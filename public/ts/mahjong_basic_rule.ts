export default class{
    OK():void{
        console.log('OK');
    }

    getAllTileObj(){
        const m1_000 = new Tile(0, '01_m1', 1, 'manzu');
        const m1_001 = new Tile(1, '01_m1', 1, 'manzu');
        const m1_002 = new Tile(2, '01_m1', 1, 'manzu');
        const m1_003 = new Tile(3, '01_m1', 1, 'manzu');
        const m2_004 = new Tile(4, '02_m2', 2, 'manzu');
        const m2_005 = new Tile(5, '02_m2', 2, 'manzu');
        const m2_006 = new Tile(6, '02_m2', 2, 'manzu');
        const m2_007 = new Tile(7, '02_m2', 2, 'manzu');
        const m3_008 = new Tile(8, '03_m3', 3, 'manzu');
        const m3_009 = new Tile(9, '03_m3', 3, 'manzu');
        const m3_010 = new Tile(10, '03_m3', 3, 'manzu');
        const m3_011 = new Tile(11, '03_m3', 3, 'manzu');
        const m4_012 = new Tile(12, '04_m4', 4, 'manzu');
        const m4_013 = new Tile(13, '04_m4', 4, 'manzu');
        const m4_014 = new Tile(14, '04_m4', 4, 'manzu');
        const m4_015 = new Tile(15, '04_m4', 4, 'manzu');
        const m5_016 = new Tile(16, '05_m5', 5, 'manzu');
        const m5_017 = new Tile(17, '05_m5', 5, 'manzu');
        const m5_018 = new Tile(18, '05_m5', 5, 'manzu');
        const m5_019 = new Tile(19, '05_m5', 5, 'manzu');
        const m5r_020 = new Tile(20, '06_m5r', 5, 'manzu');
        const m6_021 = new Tile(21, '07_m6', 6, 'manzu');
        const m6_022 = new Tile(22, '07_m6', 6, 'manzu');
        const m6_023 = new Tile(23, '07_m6', 6, 'manzu');
        const m6_024 = new Tile(24, '07_m6', 6, 'manzu');
        const m7_025 = new Tile(25, '08_m7', 7, 'manzu');
        const m7_026 = new Tile(26, '08_m7', 7, 'manzu');
        const m7_027 = new Tile(27, '08_m7', 7, 'manzu');
        const m7_028 = new Tile(28, '08_m7', 7, 'manzu');
        const m8_029 = new Tile(29, '09_m8', 8, 'manzu');
        const m8_030 = new Tile(30, '09_m8', 8, 'manzu');
        const m8_031 = new Tile(31, '09_m8', 8, 'manzu');
        const m8_032 = new Tile(32, '09_m8', 8, 'manzu');
        const m9_033 = new Tile(33, '10_m9', 9, 'manzu');
        const m9_034 = new Tile(34, '10_m9', 9, 'manzu');
        const m9_035 = new Tile(35, '10_m9', 9, 'manzu');
        const m9_036 = new Tile(36, '10_m9', 9, 'manzu');
        const p1_037 = new Tile(37, '11_p1', 1, 'pinzu');
        const p1_038 = new Tile(38, '11_p1', 1, 'pinzu');
        const p1_039 = new Tile(39, '11_p1', 1, 'pinzu');
        const p1_040 = new Tile(40, '11_p1', 1, 'pinzu');
        const p2_041 = new Tile(41, '12_p2', 2, 'pinzu');
        const p2_042 = new Tile(42, '12_p2', 2, 'pinzu');
        const p2_043 = new Tile(43, '12_p2', 2, 'pinzu');
        const p2_044 = new Tile(44, '12_p2', 2, 'pinzu');
        const p3_045 = new Tile(45, '13_p3', 3, 'pinzu');
        const p3_046 = new Tile(46, '13_p3', 3, 'pinzu');
        const p3_047 = new Tile(47, '13_p3', 3, 'pinzu');
        const p3_048 = new Tile(48, '13_p3', 3, 'pinzu');
        const p4_049 = new Tile(49, '14_p4', 4, 'pinzu');
        const p4_050 = new Tile(50, '14_p4', 4, 'pinzu');
        const p4_051 = new Tile(51, '14_p4', 4, 'pinzu');
        const p4_052 = new Tile(52, '14_p4', 4, 'pinzu');
        const p5_053 = new Tile(53, '15_p5', 5, 'pinzu');
        const p5_054 = new Tile(54, '15_p5', 5, 'pinzu');
        const p5_055 = new Tile(55, '15_p5', 5, 'pinzu');
        const p5_056 = new Tile(56, '15_p5', 5, 'pinzu');
        const p5r_057 = new Tile(57, '16_p5r', 5, 'pinzu');
        const p6_058 = new Tile(58, '17_p6', 6, 'pinzu');
        const p6_059 = new Tile(59, '17_p6', 6, 'pinzu');
        const p6_060 = new Tile(60, '17_p6', 6, 'pinzu');
        const p6_061 = new Tile(61, '17_p6', 6, 'pinzu');
        const p7_062 = new Tile(62, '18_p7', 7, 'pinzu');
        const p7_063 = new Tile(63, '18_p7', 7, 'pinzu');
        const p7_064 = new Tile(64, '18_p7', 7, 'pinzu');
        const p7_065 = new Tile(65, '18_p7', 7, 'pinzu');
        const p8_066 = new Tile(66, '19_p8', 8, 'pinzu');
        const p8_067 = new Tile(67, '19_p8', 8, 'pinzu');
        const p8_068 = new Tile(68, '19_p8', 8, 'pinzu');
        const p8_069 = new Tile(69, '19_p8', 8, 'pinzu');
        const p9_070 = new Tile(70, '20_p9', 9, 'pinzu');
        const p9_071 = new Tile(71, '20_p9', 9, 'pinzu');
        const p9_072 = new Tile(72, '20_p9', 9, 'pinzu');
        const p9_073 = new Tile(73, '20_p9', 9, 'pinzu');
        const s1_074 = new Tile(74, '21_s1', 1, 'souzu');
        const s1_075 = new Tile(75, '21_s1', 1, 'souzu');
        const s1_076 = new Tile(76, '21_s1', 1, 'souzu');
        const s1_077 = new Tile(77, '21_s1', 1, 'souzu');
        const s2_078 = new Tile(78, '22_s2', 2, 'souzu');
        const s2_079 = new Tile(79, '22_s2', 2, 'souzu');
        const s2_080 = new Tile(80, '22_s2', 2, 'souzu');
        const s2_081 = new Tile(81, '22_s2', 2, 'souzu');
        const s3_082 = new Tile(82, '23_s3', 3, 'souzu');
        const s3_083 = new Tile(83, '23_s3', 3, 'souzu');
        const s3_084 = new Tile(84, '23_s3', 3, 'souzu');
        const s3_085 = new Tile(85, '23_s3', 3, 'souzu');
        const s4_086 = new Tile(86, '24_s4', 4, 'souzu');
        const s4_087 = new Tile(87, '24_s4', 4, 'souzu');
        const s4_088 = new Tile(88, '24_s4', 4, 'souzu');
        const s4_089 = new Tile(89, '24_s4', 4, 'souzu');
        const s5_090 = new Tile(90, '25_s5', 5, 'souzu');
        const s5_091 = new Tile(91, '25_s5', 5, 'souzu');
        const s5_092 = new Tile(92, '25_s5', 5, 'souzu');
        const s5_093 = new Tile(93, '25_s5', 5, 'souzu');
        const s5r_094 = new Tile(94, '26_s5r', 5, 'souzu');
        const s6_095 = new Tile(95, '27_s6', 6, 'souzu');
        const s6_096 = new Tile(96, '27_s6', 6, 'souzu');
        const s6_097 = new Tile(97, '27_s6', 6, 'souzu');
        const s6_098 = new Tile(98, '27_s6', 6, 'souzu');
        const s7_099 = new Tile(99, '28_s7', 7, 'souzu');
        const s7_100 = new Tile(100, '28_s7', 7, 'souzu');
        const s7_101 = new Tile(101, '28_s7', 7, 'souzu');
        const s7_102 = new Tile(102, '28_s7', 7, 'souzu');
        const s8_103 = new Tile(103, '29_s8', 8, 'souzu');
        const s8_104 = new Tile(104, '29_s8', 8, 'souzu');
        const s8_105 = new Tile(105, '29_s8', 8, 'souzu');
        const s8_106 = new Tile(106, '29_s8', 8, 'souzu');
        const s9_107 = new Tile(107, '30_s9', 9, 'souzu');
        const s9_108 = new Tile(108, '30_s9', 9, 'souzu');
        const s9_109 = new Tile(109, '30_s9', 9, 'souzu');
        const s9_110 = new Tile(110, '30_s9', 9, 'souzu');
        const east_111 = new Tile(111, '31_east', 1, 'kaze');
        const east_112 = new Tile(112, '31_east', 1, 'kaze');
        const east_113 = new Tile(113, '31_east', 1, 'kaze');
        const east_114 = new Tile(114, '31_east', 1, 'kaze');
        const south_115 = new Tile(115, '32_south', 2, 'kaze');
        const south_116 = new Tile(116, '32_south', 2, 'kaze');
        const south_117 = new Tile(117, '32_south', 2, 'kaze');
        const south_118 = new Tile(118, '32_south', 2, 'kaze');
        const west_119 = new Tile(119, '33_west', 3, 'kaze');
        const west_120 = new Tile(120, '33_west', 3, 'kaze');
        const west_121 = new Tile(121, '33_west', 3, 'kaze');
        const west_122 = new Tile(122, '33_west', 3, 'kaze');
        const north_123 = new Tile(123, '34_north', 4, 'kaze');
        const north_124 = new Tile(124, '34_north', 4, 'kaze');
        const north_125 = new Tile(125, '34_north', 4, 'kaze');
        const north_126 = new Tile(126, '34_north', 4, 'kaze');
        const white_127 = new Tile(127, '35_white', 1, 'sangen');
        const white_128 = new Tile(128, '35_white', 1, 'sangen');
        const white_129 = new Tile(129, '35_white', 1, 'sangen');
        const white_130 = new Tile(130, '35_white', 1, 'sangen');
        const green_131 = new Tile(131, '36_green', 2, 'sangen');
        const green_132 = new Tile(132, '36_green', 2, 'sangen');
        const green_133 = new Tile(133, '36_green', 2, 'sangen');
        const green_134 = new Tile(134, '36_green', 2, 'sangen');
        const red_135 = new Tile(135, '37_red', 3, 'sangen');
        const red_136 = new Tile(136, '37_red', 3, 'sangen');
        const red_137 = new Tile(137, '37_red', 3, 'sangen');
        const red_138 = new Tile(138, '37_red', 3, 'sangen');

        return [m1_000, m1_001, m1_002, m1_003, m2_004, m2_005, m2_006, m2_007, m3_008, m3_009, m3_010, m3_011, m4_012, m4_013, m4_014, m4_015, m5_016, m5_017, m5_018, m5_019, m5r_020, m6_021, m6_022, m6_023, m6_024, m7_025, m7_026, m7_027, m7_028, m8_029, m8_030, m8_031, m8_032, m9_033, m9_034, m9_035, m9_036, p1_037, p1_038, p1_039, p1_040, p2_041, p2_042, p2_043, p2_044, p3_045, p3_046, p3_047, p3_048, p4_049, p4_050, p4_051, p4_052, p5_053, p5_054, p5_055, p5_056, p5r_057, p6_058, p6_059, p6_060, p6_061, p7_062, p7_063, p7_064, p7_065, p8_066, p8_067, p8_068, p8_069, p9_070, p9_071, p9_072, p9_073, s1_074, s1_075, s1_076, s1_077, s2_078, s2_079, s2_080, s2_081, s3_082, s3_083, s3_084, s3_085, s4_086,s4_087, s4_088, s4_089, s5_090, s5_091, s5_092, s5_093, s5r_094, s6_095, s6_096, s6_097, s6_098, s7_099, s7_100, s7_101, s7_102, s8_103, s8_104, s8_105, s8_106, s9_107, s9_108, s9_109, s9_110, east_111, east_112, east_113, east_114, south_115, south_116, south_117, south_118, west_119, west_120, west_121, west_122, north_123, north_124, north_125, north_126, white_127, white_128, white_129, white_130, green_131, green_132, green_133, green_134, red_135, red_136, red_137, red_138];
    }

    getSelectedTileObj(selectedTileNameArray:string[]){
        const AllTile = this.getAllTileObj();
        const selectedTileObj:Tile[] = [];
        let count = 0;
        selectedTileNameArray.sort();
        for(let item of AllTile){
            if(item.name === selectedTileNameArray[count]){
                selectedTileObj.push(item);
                count++;
            }
        }
        return selectedTileObj;
    }
}

class Tile{
    id:number;
    name:string;
    num:number;
    kind:string;

    constructor(id:number, name:string, num:number, kind:string){
        this.id = id;
        this.name = name;
        this. num = num;
        this.kind = kind;
    }
}