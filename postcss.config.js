const propertiesOrder = require('./postcss-properties-order.js');

module.exports = {
    plugins: [
        require('postcss-preset-env'),
        [
            'postcss-sorting',
            {
                // order: [
                //     'custom-properties',
                //     'dollar-variables',
                //     'declarations',
                //     'rules',
                //     'at-rules',
                // ],
                'properties-order': propertiesOrder,
                // 'unspecified-properties-position': 'bottom',
            },
        ]
    ],
};