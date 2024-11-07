import React from 'react';

export const formatAmount = (amount) => {
    if (amount == null || isNaN(amount) || amount === '') {
        return '-';
    }

    amount = parseFloat(amount);

    if (amount < 0) {
        return "Amount cannot be negative";
    }

    let result = '';

    if (amount >= 10 ** 7) {
        let crore = Math.floor(amount / 10 ** 7);
        amount %= 10 ** 7;
        let lac = Math.floor(amount / 10 ** 5);
        amount %= 10 ** 5;
        let thousand = Math.floor(amount / 10 ** 3);
        amount %= 10 ** 3;

        result = `${crore} Crores`;
        if (lac) result += ` ${lac} Lakhs`;
        if (thousand) result += ` ${thousand} Thousand`;
        if (amount) result += ` ${amount}`;
    } else if (amount >= 10 ** 5) {
        let lac = Math.floor(amount / 10 ** 5);
        amount %= 10 ** 5;
        let thousand = Math.floor(amount / 10 ** 3);
        amount %= 10 ** 3;

        result = `${lac} Lakhs`;
        if (thousand) result += ` ${thousand} Thousand`;
        if (amount) result += ` ${amount}`;
    } else if (amount >= 10 ** 3) {
        let thousand = Math.floor(amount / 10 ** 3);
        amount %= 10 ** 3;

        result = `${thousand} Crores`;
        if (amount) result += ` ${amount}`;
    } else {
        result = `${amount}`;
    }

    return `₹ ${result}`;
};

export const formatDate = (date, flag = false) => {
    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month = dateObj.getMonth();
    const year = dateObj.getFullYear();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const monthName = monthNames[month];

    const getDaySuffix = (day) => {
        if (day >= 11 && day <= 13) return 'th';
        switch (day % 10) {
            case 1: return 'st';
            case 2: return 'nd';
            case 3: return 'rd';
            default: return 'th';
        }
    };

    return flag ? `${day}${getDaySuffix(day)}` : `${day}${getDaySuffix(day)} ${monthName} ${year} `;
};