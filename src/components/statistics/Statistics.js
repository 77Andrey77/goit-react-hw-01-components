import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>Upload stats</h2>}
            <ul className={s.statList}>
                {stats.map(({ id, label, percentage }) => (
                    <li className={s.item} key={id}>
                        <span className={s.label}>{label}</span>
                        <span className={s.percentage}>{percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};

/* <ul className={s.statList}>
    {stats.map(({ id, stat }) => (
        <li className={s.item} key={id}>
            <span className={s.label}>{stat.label}</span>
            <br />
            <span className={s.percentage}>{stat.percentage} %</span>
        </li>
    ))}
</ul>; */
