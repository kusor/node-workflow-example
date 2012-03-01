#
# Copyright (c) 2012, Joyent, Inc. All rights reserved.
#

#
# Tools
#
NPM		:= $(shell which npm)

#
# Files
#
JS_FILES	:= $(shell ls *.js)
JSL_CONF_NODE	 = tools/jsl.node.conf
JSL_FILES_NODE   = $(JS_FILES)
JSSTYLE_FILES	 = $(JS_FILES)
JSSTYLE_FLAGS    = -o indent=2,doxygen,unparenthesized-return=0

#
# Repo-specific targets
#
.PHONY: all
all: check

.PHONY: setup
setup: $(NPM)
	$(NPM) install

include ./Makefile.deps
include ./Makefile.targ
