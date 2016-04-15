/*
 *  Copyright (C) 2016  Leonardosnt
 *
 *  This program is free software; you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation; either version 2 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License along
 *  with this program; if not, write to the Free Software Foundation, Inc.,
 *  51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
*/

'use strict';

module.exports = (pluginContext) => {
    const shell = pluginContext.shell;

    function search(query, res) {
        const queryTrim = query.trim();

        if (queryTrim.length === 0) {
            return;
        }

        res.add({
            id: queryTrim,
            payload: 'open',
            title: queryTrim,
            desc: 'Search on Baidu.com'
        });
    }

    function execute(id, payload) {
        if (payload !== 'open') {
            return;
        }

        shell.openExternal(`https://www.baidu.com/s?wd=${id}`);
    }

    return {
        search,
        execute
    };
};
