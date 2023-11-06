import {
	PanelProps,
	Panel,
	Utils,
} from 'qmi';
import {
	DataTypes,
} from 'qmi/data-types';
import * as React from 'react';

import {
	__,
	_n,
	sprintf,
} from '@wordpress/i18n';

export const DBDupes = ( { data }: PanelProps<DataTypes['DB_Dupes']> ) => {
	if ( ! data.dupes || ! Object.keys( data.dupes ).length ) {
		return null;
	}

	return (
		<Panel>
			<table>
				<caption>
					<h2 id="qm-panel-title">
						{ __( 'Duplicate Queries', 'query-monitor' ) }
					</h2>
				</caption>
				<thead>
					<tr>
						<th scope="col">
							{ __( 'Query', 'query-monitor' ) }
						</th>
						<th className="qm-num" scope="col">
							{ __( 'Count', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ __( 'Callers', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ __( 'Components', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ __( 'Potential Troublemakers', 'query-monitor' ) }
						</th>
					</tr>
				</thead>
				<tbody>
					{ Object.entries( data.dupes ).map( ( [ key, row ] ) => {
						const callers = data.dupe_callers[key];
						const components = data.dupe_components[key];
						const sources = data.dupe_sources[key];
						return (
							<tr>
								<td className="qm-cell-sql qm-ltr qm-wrap">
									{ Utils.formatSQL( key ) }
								</td>
								<td className="qm-num">
									{ row.length }
								</td>
								<td>
									{ Object.entries( callers ).map( ( [ caller, calls ] ) => (
										<>
											<code>{ caller }</code>
											<br/>
											<span className="qm-info qm-supplemental">
												{ sprintf(
													_n( '%s call', '%s calls', calls, 'query-monitor' ),
													calls
												) }
											</span>
											<br/>
										</>
									) ) }
								</td>
								<td>
									{ Object.entries( components ).map( ( [ component, calls ] ) => (
										<>
											{ component }
											<br/>
											<span className="qm-info qm-supplemental">
												{ sprintf(
													_n( '%s call', '%s calls', calls, 'query-monitor' ),
													calls
												) }
											</span>
											<br/>
										</>
									) ) }
								</td>
								<td>
									{ Object.entries( sources ).map( ( [ source, calls ] ) => (
										<>
											<code>{ source }</code>
											<br/>
											<span className="qm-info qm-supplemental">
												{ sprintf(
													_n( '%s call', '%s calls', calls, 'query-monitor' ),
													calls
												) }
											</span>
											<br/>
										</>
									) ) }
								</td>
							</tr>
						);
					} ) }
				</tbody>
			</table>
		</Panel>
	);
};
