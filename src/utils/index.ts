export const formatDate = (dateString:string) => {
    const months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];

    const days = [
        "Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"
    ];

    const dateParts = dateString.split('-');
    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]);
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month - 1, day);
    const formattedDate = `${days[date.getDay()]}, ${day} ${months[month - 1]} ${year}`;

    return formattedDate;
};

export const formatterCurrency = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
});