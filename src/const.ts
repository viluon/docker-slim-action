export const core = require('@actions/core');
export const fs = require('fs');
export const https = require('https');
export const io = require('@actions/io');
export const os = require('os');
export const path = require('path');
export const shell = require('@actions/exec');
export const TMP_DIR = fs.mkdtempSync(path.join(os.tmpdir(), 'slim-'));