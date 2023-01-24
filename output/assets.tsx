import { PanelFooter } from 'qmi';
import * as React from 'react';
import { WP_Error } from 'wp-types';

import {
	__,
	_x,
} from '@wordpress/i18n';

interface iAsset {
	host: string;
	port: string;
	source: string|WP_Error;
	local: boolean;
	ver: string;
	warning: boolean;
	display: string;
	dependents: Array<string>;
	dependencies: Array<string>;
}

interface iAssetList {
	[k:string]: iAsset;
}

interface iAssetsProps {
	data: {
		assets: {
			missing: iAssetList;
			broken: iAssetList;
			header: iAssetList;
			footer: iAssetList;
		};
		broken: any;
		counts: {
			missing: number;
			broken: number;
			header: number;
			footer: number;
			total: number;
		};
		default_version: string;
		dependencies: Array<string>;
		dependents: Array<string>;
		footer: Array<string>;
		header: Array<string>;
		host: string;
		is_ssl: boolean;
		missing: Array<string>;
		missing_dependencies: {
			[k:string]: true;
		};
		port: string;
	};
}

interface iPositionLabels {
	missing : string;
	broken : string;
	header : string;
	footer : string;
}

class Assets extends React.Component<iAssetsProps, Record<string, unknown>> {

	render() {
		const { data } = this.props;
		const position_labels: iPositionLabels = {
			missing: __( 'Missing', 'query-monitor' ),
			broken: __( 'Missing Dependencies', 'query-monitor' ),
			header: __( 'Header', 'query-monitor' ),
			footer: __( 'Footer', 'query-monitor' ),
		};

		return (
			<>
				<thead>
					<tr>
						<th scope="col">
							{ __( 'Position', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ __( 'Handle', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ __( 'Host', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ __( 'Source', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ __( 'Dependencies', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ __( 'Dependents', 'query-monitor' ) }
						</th>
						<th scope="col">
							{ __( 'Version', 'query-monitor' ) }
						</th>
					</tr>
				</thead>
				<tbody>
					{ Object.keys( position_labels ).map( ( key: keyof typeof position_labels ) => (
						<React.Fragment key={ key }>
							{ data.assets[ key ] && Object.keys( data.assets[ key ] ).map( handle => {
								const asset = data.assets[ key ][ handle ];
								return (
									<tr key={ handle }>
										<td>
											{ position_labels[ key ] }
										</td>
										<td>
											{ handle }
										</td>
										<td>
											{ asset.host }
										</td>
										<td>
											{ asset.display }
										</td>
										<td>
											{ asset.dependencies.join( ', ' ) }
										</td>
										<td>
											{ asset.dependents.join( ', ' ) }
										</td>
										<td>
											{ asset.ver }
										</td>
									</tr>
								);
							} ) }
						</React.Fragment>
					) ) }
				</tbody>
				<PanelFooter
					cols={ 7 }
					count={ data.counts.total }
					label={ _x( 'Total:', 'Total assets', 'query-monitor' ) }
				/>
			</>
		);
	}

}

export default Assets;
