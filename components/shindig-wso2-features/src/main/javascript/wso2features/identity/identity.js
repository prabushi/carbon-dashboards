/*
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Implements dashboard API identity feature.
 */
wso2.gadgets.identity = (function () {

    /**
     * Service name to get username.
     * @const
     * @private
     */
    var RPC_SERVICE_GET_USERNAME = 'RPC_SERVICE_GET_USERNAME';

    /**
     * Service name to get access token.
     * @const
     * @private
     */
    var RPC_SERVICE_GET_ACCESS_TOKEN = 'RPC_SERVICE_GET_ACCESS_TOKEN';

    /**
     * Get logged in user's username.
     * @param {function} callback Callback function
     * @return {null}
     */
    var getUsername = function (callback) {
        wso2.gadgets.core.callContainerService(RPC_SERVICE_GET_USERNAME, null, function (username) {
            if (callback) {
                callback(username);
            }
        });
    };

    /**
     * Get OAuth access token.
     * @param {function} callback Callback function
     * @return {null}
     */
    var getAccessToken = function (callback) {
        wso2.gadgets.core.callContainerService(RPC_SERVICE_GET_ACCESS_TOKEN, null, function (accessToken) {
            if (callback) {
                callback(accessToken);
            }
        });
    };

    return {
        getUsername: getUsername,
        getAccessToken: getAccessToken
    };
})();