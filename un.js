function rata (mat, bindo, bing, ipa) {

    hasil=(mat+ bindo+ bing+ ipa)/4;

    if (hasil >= 90) {
        console.log("Rata-rata : " + hasil + " Grade : A ")
    } else if (hasil >= 80) {
        console.log("Rata-rata : " + hasil + " Grade : B ")
    } else if (hasil >= 70) {
        console.log("Rata-rata : " + hasil + " Grade : C ")
    } else if (hasil >= 60) {
        console.log("Rata-rata : " + hasil + " Grade : D ")
    } else if (hasil >= 0) {
        console.log("Rata-rata : " + hasil + " Grade : E ")
    } else {
        console.log('Periksa kembali nilai yang dimasukkan')
    }
};

//memasukkan nilai
rata(83, 93, 83, 79);
rata(100, 95, 850);
